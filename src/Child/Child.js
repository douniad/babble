import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import BabbleContext from '../BabbleContext'
import PropTypes from 'prop-types'

class Child extends Component {
    static contextType = BabbleContext
 
    afterRemove = () => {
        this.context.removeChild(this.props.id)
        this.props.history.push('/childboard')
    }
    
    render() {
        return (
 

            <div className="child-container">
                <h3>
                    <Link className="linknoline" to={`/children/${this.props.id}`}></Link>
                </h3>
                <button onClick={() => this.afterRemove()} type="button" className="remove-child">Remove Child</button>
            </div>


        )
    }
}

export default withRouter(Child)

Child.propTypes = {
    id: PropTypes.number
}
