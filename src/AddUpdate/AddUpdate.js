import React from 'react'
import BabbleContext from '../BabbleContext'
import PropTypes from 'prop-types'
import './AddUpdate.css'

export default function AddUpdate(props) {

    return <BabbleContext.Consumer>
        {value => {
            function onUpdateSubmit(e) {
                value.addUpdate(e)
                props.history.push('/childboard')
            }
            return (
                <form onSubmit={onUpdateSubmit}>
                    <label>Update</label>
                    <input className="LastLabel" type="text" name="update" required/>
                    <label>Child</label>
                    <select name="childId">
                        {value.children.map(child => <option key={child.id} value={child.id}>
                            {child.name}
                        </option>)}
                    </select>
                    <label>Signature</label>
                    <input className="signature" type="text" name="signature" required/>
                    <button className="UpdateButton">Post Update</button>
                </form>
            )
        }
        }
    </BabbleContext.Consumer>

}

AddUpdate.propTypes = {
    history: PropTypes.any
}