import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import config from '../config'
import BabbleContext from '../BabbleContext'


class ChildBoard extends Component {
static contextType = BabbleContext
    state = {
        children: [],
        updates: []
    }
    

    componentDidMount() {
        fetch(config.API_ENDPOINT+'/children')
        .then(res => res.json())
        .then(children => {
            this.context.setChildren(
                children
            )
           // return fetch(config.API_ENDPOINT+'/updates')
        })
       
    }
    render() {
    return(
        <div>
          
        <section className="ChildBoard">
            <ul className="children-list">
                {this.context.children.map(child =>
                <li key= {child.id} className={`child-item ${this.props.selectedChild === child.name ? 'active-child' : ''}`}>
                    <NavLink to={`/children/${child.id}`}>
                        <span>{child.name}</span>
                    </NavLink>
                </li>
                )
                }
            </ul>
            <NavLink to={`/addchild`} ><button type="button" className="add-child">Add Child</button> </NavLink>
        </section>
        </div>
    )
    }
}

export default ChildBoard

ChildBoard.propTypes = {
    children: PropTypes.array,
    selectedChild: PropTypes.string
}