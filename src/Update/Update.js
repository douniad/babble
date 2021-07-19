import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import BabbleContext from '../BabbleContext'
import Child from '../Child/Child'
import PropTypes from 'prop-types'
import AddUpdate from '../AddUpdate/AddUpdate'

class Update extends Component {
    static contextType = BabbleContext

    afterDelete = () => {
        this.context.deleteUpdate(this.props.match.params.childId)
        this.props.history.push('/')
    }
    render() { 
        return (
            <div className="maindiv">
            <div className="update-container">
                <h3>
                    <AddUpdate/>
                    <Link to={`/updates/${this.props.id}`} className="update-name">{this.props.name}</Link>
                    <button>Delete Post</button>
                </h3>
            </div>
            <Child id={this.props.match.params.childId}/>
            </div>

            
        )
    }
}

export default withRouter(Update);

Update.propTypes = {
id: PropTypes.number,
name: PropTypes.string
}