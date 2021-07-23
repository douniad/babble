import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import AddChild from '../AddChild/AddChild'
import AddUpdate from '../AddUpdate/AddUpdate'
import AuthApiService from '../Services/Auth-Api-Service'
import BabbleContext from '../BabbleContext'
import ChildBoard from '../ChildBoard/ChildBoard'
import config from '../config'
import ExitUpdate from '../ExitUpdate/ExitUpdate'
import FirstPage from '../FirstPage/FirstPage'
import Header from '../Header/Header'
import IdleService from '../Services/Idle-Service'
import Login from '../Login/Login'
import Nav from '../Nav/Nav'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import Register from '../Register/Register'
import TokenService from '../Services/Token-Service'
import Update from '../Update/Update'
import UpdateBoard from '../UpdateBoard/UpdateBoard'


const { v4: uuidv4 } = require('uuid')


class App extends Component {

    state = {
        children: [],
        updates: [],
        user: TokenService.getAuthToken()
    }


    componentDidMount() {

        if (TokenService.hasAuthToken()) {
            TokenService.queueCallbackBeforeExpiry(() => {
                AuthApiService.postRefreshToken()
            })
        }
    }

    logoutFromIdle = () => {
        TokenService.clearAuthToken()
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
        this.forceUpdate()
    }

    addChild = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const child = { name, id: uuidv4() }
        fetch(config.API_ENDPOINT + '/children', {
            method: 'post',
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(child)
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    children: this.state.children.concat(res)
                })
            })
    }

    removeChild = (id) => {
        fetch(config.API_ENDPOINT + `/children/${id}`, {
            method: 'delete',
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => {
                this.setState({
                    children: this.state.children.filter(child => child.id !== id)
                })
            })
    }

    addUpdate = (e) => {
        e.preventDefault()
        const text = e.target.text.value
        const child_id = e.target.child_id.value
        const date = new Date()
        const update = { text, date, child_id }
        fetch(config.API_ENDPOINT + '/updates', {
            method: 'post',
            headers: {

                'authorization': `Bearer ${TokenService.getAuthToken()}`,

                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    updates: this.state.updates.concat(res)
                })
            })

    }

    setChildren = children => {
        this.setState({
            children
        })
    }

    setUpdates = updates => {
        this.setState({
            updates
        })
    }

    setUser = user => {
        this.setState({
            user
        })
    }

    deleteUpdate = (id) => {
        fetch(config.API_ENDPOINT + `/updates/${id}`, {
            method: 'delete',
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => {
                this.setState({
                    updates: this.state.updates.filter(update => update.id !== id)
                })
            })
    }

    render() {
        const value = {
            children: this.state.children,
            updates: this.state.updates,
            user: this.state.user,
            addChild: this.addChild,
            addUpdate: this.addUpdate,
            deleteUpdate: this.deleteUpdate,
            setUpdates: this.setUpdates,
            setChildren: this.setChildren,
            setUser: this.setUser,
            removeChild: this.removeChild
        }

        return (

            <BabbleContext.Provider value={value}>

                <div className="big-container">

                    {this.state.user ? <Nav /> : <Header />}

                    <main>
                        <PrivateRoute exact path="/childboard" component={ChildBoard} />
                        <PrivateRoute path="/updates/:updateId" render={(routeProps) => {
                            const updateId = routeProps.match.paramsms.updateId
                            const selectedUpdate = this.state.updates.find(update => update.id === parseInt(updateId)) || {}
                            return <ExitUpdate selectedUpdate={selectedUpdate} {...routeProps}
                            />
                        }}
                        />
                        <PrivateRoute path="/children/:childId" component={Update}/>
                        <PrivateRoute exact path="/updateboard" render={() =>
                            <UpdateBoard updates={this.state.updates}/>
                        }/>
                        <Route exact path={'/'} component={FirstPage} />
                        <PublicOnlyRoute path={'/login'} component={Login} />
                        <PublicOnlyRoute path={'/register'} component={Register} />
                        <PrivateRoute path={'/addchild'} component={AddChild} />
                        <PrivateRoute path={'/addupdate'} component={AddUpdate} />
                    </main>
                    
                </div>

            </BabbleContext.Provider>
        )
    }
}

export default App;
