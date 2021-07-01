import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class FirstPage extends Component {
    render() {
        return(

        <section>
       <NavLink to={'/register'}><button type="button" className="register">Register</button></NavLink> 
       <NavLink to={'/login'}><button type="button" className="login">Log In</button></NavLink> 
       </section>
        )
    }
}

export default FirstPage

