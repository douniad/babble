import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../Services/Token-Service'
import IdleService from '../Services/Idle-Service'
import './Nav.css'

 class Header extends Component {
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
            to='/'>
            Logout
          </Link>
        </div>
      )
    }
  


    render() {
        return (
          <nav className='Header'>
            <h1>
              <Link to='/'>
                babble
              </Link>
            </h1>
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </nav>
        )
      }
    }

    export default Header