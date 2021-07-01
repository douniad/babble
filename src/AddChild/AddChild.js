import React from 'react'
import BabbleContext from '../BabbleContext'
import PropTypes from 'prop-types'

export default function AddChild(props) {

    return <BabbleContext.Consumer>
        {value => {
            function onChildSubmit(e) {
                value.addChild(e)
                props.history.push('/mainpage')
            }
            return (
                <form onSubmit={onChildSubmit}>
                    <label>Name</label>
                    <input name="name"/>
                    <button>Add Child</button>
                </form>
            )
        }

        }
    </BabbleContext.Consumer>

    
}
AddChild.propTypes = {
    history: PropTypes.any
}