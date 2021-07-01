import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="landing-page">
                
                    <h1 className="babble-header">
                        <Link className="link" to='/'>babble</Link>
                    </h1>
               
                <h2>Where it's all about the little ones.</h2>
            </div>
        )
    }
}

export default Header;