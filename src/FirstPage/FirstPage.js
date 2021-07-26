import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './FirstPage.css'
import '../moana.png'
import TokenService from '../Services/Token-Service'
import BabbleContext from '../BabbleContext'


class FirstPage extends Component {
    
    static contextType = BabbleContext

    renderLoggedOutFirstPage() {
        return <div className="firstpage">
            <NavLink className="linknoline" to={'/gettingstarted'}><button type="button" className="gettingstartedbutton">Getting Started</button></NavLink>
            <NavLink className="linknoline" to={'/register'}><button type="button" className="registerbutton">Register</button></NavLink>
            <NavLink className="linknoline" to={'/login'}><button type="button" className="loginbutton">Log In</button></NavLink>
        </div>
    }

    renderLoggedInFirstPage() {
        <div></div>
    }


    render() {

        return (

            <div className="landingpage">

                
                <section className="headersection">
                    <h1 className="babbleheader">
                        babble
                    </h1>
                    <h2 className="h2babble">All about your little ones.</h2>
                </section>

                <span><img className="moana" src="/static/media/moana.6abbc0bd.png" alt="baby with turtle" /></span>


                <main className="stuff">
                    {TokenService.hasAuthToken()
                        ? this.renderLoggedInFirstPage()
                        : this.renderLoggedOutFirstPage()}
                </main>

            </div>
        )
    }
}

export default FirstPage

