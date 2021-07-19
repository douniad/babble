import React, { Component } from 'react';
import { Route } from "react-router-dom";
import BabbleContext from '../BabbleContext';
import AddChild from '../AddChild/AddChild';
import AddUpdate from '../AddUpdate/AddUpdate';
import Login from '../Login/Login'
import Register from '../Register/Register'
import FirstPage from '../FirstPage/FirstPage'
import ChildBoard from '../ChildBoard/ChildBoard'
import ClickUpdate from '../ClickUpdate/ClickUpdate'
import ExitUpdate from '../ExitUpdate/ExitUpdate'
import config from "../config"
import UpdateBoard from '../UpdateBoard/UpdateBoard';
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import TokenService from '../Services/Token-Service'
import IdleService from '../Services/Idle-Service'
import AuthApiService from '../Services/Auth-Api-Service'
import Nav from '../Nav/Nav'
import Header from '../Header/Header';

import './App.css'
import Update from '../Update/Update'


const { v4: uuidv4 } = require('uuid')


class App extends Component {

    state = {
        children: [],
        updates: [],
        user: TokenService.getAuthToken()
    }


    componentDidMount() {


        /* if a user is logged in */
        if (TokenService.hasAuthToken()) {

            /*
              Tell the token service to read the JWT, looking at the exp value
              and queue a timeout just before the token expires
            */
            TokenService.queueCallbackBeforeExpiry(() => {
                /* the timoue will call this callback just before the token expires */
                AuthApiService.postRefreshToken()
            })
        }
    }



    logoutFromIdle = () => {
        /* remove the token from localStorage */
        TokenService.clearAuthToken()
        /* remove any queued calls to the refresh endpoint */
        TokenService.clearCallbackBeforeExpiry()
        /* remove the timeouts that auto logout when idle */
        IdleService.unRegisterIdleResets()
        /*
          react won't know the token has been removed from local storage,
          so we need to tell React to rerender
        */
        this.forceUpdate()
    }


    addChild = (e) => {
        e.preventDefault()
        console.log('hello world')
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
        console.log('hello')
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

    AddUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const content = e.target.content.value
        const childId = e.target.childId.value
        //const date = 
        const update = { name, content, childId, id: uuidv4(), }
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
        console.log('hello')
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
            removeChild: this.removeChild,

        }


        return (
            <BabbleContext.Provider value={value}>

                

                <div className="big-container">
                   
                    
                    {this.state.user ? <Nav /> : <Header/> }

                    

                    <main>
                    <Route exact path="/childboard" render={() => 
                        <ChildBoard children={this.state.children} />}/>

                        <PrivateRoute path="/updates/:updateId" render={(routeProps) => {
                            const updateId = routeProps.match.paramsms.updateId
                            const selectedUpdate = this.state.updates.find(update => update.id === parseInt(updateId)) || {}
                            return <ExitUpdate selectedUpdate={selectedUpdate} {...routeProps}
                            />
                        }}
                        />
                       <PrivateRoute path="/children/:childId" component={Update}
                            
                        />
                        <PrivateRoute exact path="/updateboard" render={() =>
                            <UpdateBoard updates={this.state.updates}
                            />
                        }
                        />
                        <Route exact path={'/'} component={FirstPage} />
                        <PublicOnlyRoute path={'/login'} component={Login} />
                        <PublicOnlyRoute path={'/register'} component={Register} />
                        <PrivateRoute path={'/addchild'} component={AddChild} />
                        <PrivateRoute path={'/addupdate'} component={AddUpdate} />
                        <PrivateRoute path={'/updateboard'} component={AddUpdate}/>
 
                    </main>
                </div>


            </BabbleContext.Provider>
        )
    }
}

export default App;
