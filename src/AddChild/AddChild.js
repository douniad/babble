import React from 'react'
import './AddChild.css'
import BabbleContext from '../BabbleContext'
import PropTypes from 'prop-types'
import Logout from '../Logout/Logout'

export default function AddChild(props) {

    return <BabbleContext.Consumer>
        {value => {
            function onChildSubmit(e) {
                value.addChild(e)
                props.history.push('/addupdate')
            }
            return (
                <div>
                <form onSubmit={onChildSubmit}>
                    <label>Name</label>
                    <input className="LastLabel" name="name" required/>
                    <button className="AddChild">Add Child</button>
                </form>
                 <footer className="footer">
                 <Logout/>
                 </footer>
                 </div>
            )
        }
        }
    </BabbleContext.Consumer>
}

AddChild.propTypes = {
    history: PropTypes.any
}