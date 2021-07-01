import React from 'react'
import BabbleContext from '../BabbleContext'
import PropTypes from 'prop-types'

export default function AddUpdate(props) {

    return <BabbleContext.Consumer>
        {value => {
            function onUpdateSubmit(e) {
                value.addUpdate(e)
                props.history.push('/')
            }
            return (
                <form onSubmit={onUpdateSubmit}>
                    <label>Update</label>
                    <input type="text" name="update" required/>
                    <label>child</label>
                    <select name="childId">
                        {value.children.map(child => <option key={child.id} value={child.id}>
                            {child.name}
                        </option>)}
                    </select>
                    <button>Post Update</button>
                </form>
            )
        }
        }
    </BabbleContext.Consumer>

}

AddUpdate.propTypes = {
    history: PropTypes.any
}