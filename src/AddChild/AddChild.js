import React from 'react'
import BabbleContext from '../BabbleContext'
import PropTypes from 'prop-types'
import './AddChild.css'

export default function AddChild(props) {

    return <BabbleContext.Consumer>
        {value => {
            function onChildSubmit(e) {
                value.addChild(e)
                props.history.push('/addupdate')
            }
            return (
                <form onSubmit={onChildSubmit}>
                    <label>Name</label>
                    <input className="LastLabel" name="name"/>
                    <button className="AddChild">Add Child</button>
                </form>
            )
        }

        }
    </BabbleContext.Consumer>

    
}
AddChild.propTypes = {
    history: PropTypes.any
}