import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ExitUpdate extends Component {
    render() {
        return (
            <div className="">
                <button type="button" className="exit-update" onClick={() => this.props.history.exitUpdate()}>Go Back To Main Page</button>
                <h3>{this.props.childName}</h3>
            </div>
        )
    }
}

export default ExitUpdate

ExitUpdate.propTypes = {
    childName: PropTypes.string
}