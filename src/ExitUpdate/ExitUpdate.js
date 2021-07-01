import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Nav from '../Nav/Nav'

class ExitUpdate extends Component {
    render() {
        return (
            <div className="">
                <Nav/>
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