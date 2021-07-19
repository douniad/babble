import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

 class Nav extends Component {
  
  
    render() {
        return (
          <nav className="navigationbar">
            <h1>
              <Link to='/childboard'>
                babble
              </Link>
            </h1>
          </nav>
        )
      }
    }

    export default Nav