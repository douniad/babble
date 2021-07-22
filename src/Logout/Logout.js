import React, {Component} from 'react'
import TokenService from '../Services/Token-Service'
import IdleService from '../Services/Idle-Service'
import BabbleContext from '../BabbleContext'



class Logout extends Component {
  static contextType = BabbleContext
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
        this.context.setUser(null)
      }
    
      
      render() {
          return (
            <div>
            <button className="logoutbutton"
              onClick={this.handleLogoutClick}>
              Logout
            </button>
          </div>
              
               
          )
        
      }
}

export default Logout