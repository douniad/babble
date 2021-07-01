import React, {Component} from 'react'
import Update from '../Update/Update'
import PropTypes from 'prop-types'

class ClickUpdate extends Component {
    render() {
        return (
            <section className="update-container">
                <Update {...this.props.selectedUpdate} history={this.props.history}/>
                <div>
                    <p className="update-content">{this.props.selectedUpdate.content}</p>
                </div>
            </section>
        )
    }
}

export default ClickUpdate

ClickUpdate.defaultProps = {
    selectedUpdate: {}
}

ClickUpdate.propTypes = {
    selectedUpdate: PropTypes.object
}