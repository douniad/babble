import React, { Component } from 'react'
import { Link, withRouter} from 'react-router-dom'
import BabbleContext from '../BabbleContext'
import PropTypes from 'prop-types'
import AddUpdate from '../AddUpdate/AddUpdate'
import config from '../config'
import TokenService from '../Services/Token-Service'


class Update extends Component {

    static contextType = BabbleContext
    state = {
        updates: []
    }
    componentDidMount() {
        fetch(config.API_ENDPOINT + '/updates/' + this.props.match.params.childId, {
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => res.json())
            .then((updates = []) => {
                if (updates.error) {
                    return
                }
                this.setState({ updates })
            })

    }

    afterDelete = () => {
        this.context.deleteUpdate(this.props.match.params.childId)
        this.props.history.push('/')
    }


    render() {
console.log(this.state)
        return (

                <div className="maindiv">
                    <h3>
                        <AddUpdate history={this.props.history} />
                        <Link to={`/updates/${this.props.id}`} className="update-name">{this.props.name}</Link>
                        <button>Delete Post</button>
                    </h3>

                    {this.state.updates.map(update => (
                        <ul key={update.id} className="differentsummaries">
                            <li className="summarydate">{update.text}</li>
                        </ul>
                    ))}
                </div>

        )
    }
}

export default withRouter(Update);

Update.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    text: PropTypes.string
}