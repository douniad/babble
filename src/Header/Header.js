import React, { Component } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import BabbleContext from '../BabbleContext';
import TokenService from '../Services/Token-Service';
import IdleService from '../Services/Idle-Service';


class Header extends Component {

    static contextType = BabbleContext
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
        this.context.setUser(null)
    }

    renderLoggedOutHeader() {
        return (
            <div></div>
        )
    }

    renderLoggedInHeader() {
        return (
            <div>
                <NavLink className="headernavlinks" to={'/childboard'}>Childboard</NavLink>
            </div>
        )
    }

    renderLogoutLink() {
        return (
            <div>
                <Link className="headernavlinks"
                    onClick={this.handleLogoutClick}
                    to='/'>
                    Logout
                </Link>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div>
                <Link className="headernavlinks"
                    to='/register'>
                    Register
                </Link>

                <Link className="headernavlinks"
                    to='/login'>
                    Log in
                </Link>
            </div>
        )
    }


    render() {
        return (
            <div className="headerdiv">
                <section className="justheader">
                    <h1>
                        <Link className="link" to='/'>babble </Link>
                    </h1>
                </section>
                <section className="headerlinks">
                    {TokenService.hasAuthToken()
                        ? this.renderLoggedInHeader()
                        : this.renderLoggedOutHeader()
                    }
                    {TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()}

                </section>
            </div>
        )
    }
}

export default Header;
