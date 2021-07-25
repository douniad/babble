import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import config from '../config'
import BabbleContext from '../BabbleContext'
import './ChildBoard.css'
import TokenService from '../Services/Token-Service'
import '../baby.png'

class ChildBoard extends Component {
    static contextType = BabbleContext
    state = {
        children: [],
        updates: []
    }

    componentDidMount() {
        fetch(config.API_ENDPOINT + '/children', {
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => res.json())
            .then((children = []) => {
                if (children.error) {
                    return
                }
                this.context.setChildren(
                    children
                )
            })

    }
    render() {
        return (
            <div className="childboard">

                <ul className="childrenlist">
                    {this.context.children.map(child =>
                        <li key={child.id} className={`child-item ${this.props.selectedChild === child.name ? 'active-child' : ''}`}>
                            <NavLink to={`/children/${child.id}`} className="childlink">
                                <span><img className="baby" src="/static/media/baby.79330cd5.png" alt="Baby" />{child.name}</span>
                            </NavLink>
                        </li>
                    )
                    }
                </ul>

                <section className="buttonsection">
                    <NavLink className="linknoline" to={`/addchild`} ><button type="button" className="add-child">Add Child</button> </NavLink>
                    <NavLink className="linknoline" to={`/addupdate`}> <button type="button" className="add-update">Add Update</button> </NavLink>
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