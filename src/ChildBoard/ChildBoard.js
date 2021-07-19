import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import config from '../config'
import BabbleContext from '../BabbleContext'
import './ChildBoard.css'
import baby from '../baby.png'
import TokenService from '../Services/Token-Service'
import Logout from '../Logout/Logout'
import AddUpdate from '../AddUpdate/AddUpdate'



class ChildBoard extends Component {
static contextType = BabbleContext
    state = {
        children: [],
        updates: []
    }
    

    componentDidMount() {
        fetch(config.API_ENDPOINT+'/children', {
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => res.json())
        .then(children => {
            console.log(children)
            this.context.setChildren(
                children
            )
           // return fetch(config.API_ENDPOINT+'/updates')
        })
       
    }
    render() {
        console.log(this.context.children)
        console.log(baby)
    return(
        <div className="coopboard">
          
        <main className="ChildrenBoard">
            <ul className="children-list">
                {this.context.children.map(child =>
                <li key= {child.id} className={`child-item ${this.props.selectedChild === child.name ? 'active-child' : ''}`}>
                    <NavLink to={`/children/${child.id}`} className="childlink">
                        <span><img className="baby" src="/static/media/baby.79330cd5.png" alt="Baby"/>{child.name}</span>
                    </NavLink>
                    
                </li>
                )
                }
            </ul>
            <NavLink className="linknoline" to={`/addchild`} ><button type="button" className="add-child">Add Child</button> </NavLink>
            
        </main>
        <section className="updatesection">
        <AddUpdate/>
            <NavLink className="linknoline" to={`/addupdate`}> <button type="button" className="add-update">Add Update</button> </NavLink>
            
            </section>
        <Logout/>
        </div>
    )
    }
}

export default ChildBoard

ChildBoard.propTypes = {
    children: PropTypes.array,
    selectedChild: PropTypes.string
}