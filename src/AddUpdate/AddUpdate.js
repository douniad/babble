import React from 'react'
import './AddUpdate.css'
import BabbleContext from '../BabbleContext'
import PropTypes from 'prop-types'


export default function AddUpdate(props) {

    return <BabbleContext.Consumer>
        {value => {
            function onUpdateSubmit(e) {
                value.addUpdate(e)
                props.history.push('/childboard')
            }
            return (
                <div><form onSubmit={onUpdateSubmit}>
                    <label>Update</label>
                    <input className="LastLabel" type="text" name="text" required/>
                    <label>Child</label>
                    <select name="child_id">
                        {value.children.map(child => <option key={child.id} value={child.id}>
                            {child.name}
                        </option>)}
                    </select>
                    <button className="UpdateButton">Post Update</button>
                </form>
               
                </div>
            )
        }
        }
    </BabbleContext.Consumer>
}

AddUpdate.propTypes = {
    history: PropTypes.any
}