import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../Services/Token-Service'
import IdleService from '../Services/Idle-Service'


class Logout extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        /* when logging out, clear the callbacks to the refresh api and idle auto logout */
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
      }
    
      renderLogoutLink() {
        return (
          <div className='Header__logged-in'>
            <Link
              onClick={this.handleLogoutClick}
              to='/firstpage'>
              Logout
            </Link>
          </div>
        )
      }
      render() {
          return (
              <Link>Logout</Link>
              
               
          )
        
      }
}

export default Logout