import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import BabbleContext from '../BabbleContext'

class Update extends Component {
    static contextType = BabbleContext

    afterDelete = () => {
        this.context.deleteUpdate(this.props.id)
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="update-container">
                <h3>
                    <Link></Link>
                    <button>Delete Post</button>
                </h3>
            </div>
        )
    }
}

export default withRouter(Update);

Update.propTypes = {

}