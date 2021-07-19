import React, {Component} from 'react'
import Update from '../Update/Update'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

class UpdateBoard extends Component {
    render() {
        return (
            <section className="updates">
                <ul className="update-list">
                    {this.props.updates.map(update =>
                        <li className="update-post" key={update.id}>
                            <Update
                            history={this.props.history}
                            id={update.id}
                            date={update.date} />
                        </li>
                        )}

                </ul>

                <NavLink to={'/addupdate'}><button type="button" className="add-update">Add Update</button></NavLink>

            </section>
        )
    }
}

export default UpdateBoard

UpdateBoard.propTypes = {
    updates: PropTypes.array
}