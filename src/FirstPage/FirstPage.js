import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './FirstPage.css'

class FirstPage extends Component {
    render() {
        return(
            <div className="landing-page">
                
                    <h1 className="babble-header">
                        babble
                    </h1>
                <h2>All about your little ones.</h2>
             
           
       <main className="firstpage">
       <NavLink className="linknoline" to={'/register'}><button type="button" className="registerbutton">Register</button></NavLink> 
       <NavLink className="linknoline" to={'/login'}><button type="button" className="loginbutton">Log In</button></NavLink> 
       </main>
      
       </div> 
        )
    }
}

export default FirstPage

