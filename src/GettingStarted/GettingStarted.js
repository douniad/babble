import React, {Component} from 'react'
import './GettingStarted.css'
import {NavLink} from 'react-router-dom'

class GettingStarted extends Component {
    render() {
        return(

            <div className="guide">
               <span> <h1>babble - A Guide</h1>

                babble was created to simplify the communication between parents and caregivers.

                To get started, create ONE account for parents AND caregiver, add your child(ren) to the Childboard and start
                communicating with each other by adding updates.

                Happy babbling! </span>

                <NavLink className="linknoline" to={'/'}><button type="button" className="goback">Go Back</button></NavLink>


            </div>

        )
    }
}

export default GettingStarted