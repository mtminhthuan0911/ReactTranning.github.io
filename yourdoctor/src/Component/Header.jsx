import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { UilPhoneVolume } from '@iconscout/react-unicons'

class Header extends Component {
    
    render() {

        return (
            <div className="wrapper">
                <div className="container">
                    <nav className="header">
                            <img className="LogoPage" src="./img/LogoPage.svg" alt="" />
                            <div className="name">
                                <ul className="menu">
                                    <li className="menu-item"><NavLink exact to ="/"activeClassName="activity" className="menu-item-link">Home</NavLink></li>
                                    <li className="menu-item"><NavLink exact to = "/Service"activeClassName="activity" className="menu-item-link">Service</NavLink></li>
                                    <li className="menu-item"><NavLink exact to = "/API"activeClassName="activity" className="menu-item-link">API</NavLink></li>
                                    <li className="menu-item"><NavLink exact to = "/Doctor"activeClassName="activity" className="menu-item-link">Doctor</NavLink></li>
                                </ul>
                                <div className="Process">
                                    <button className="btn primary">Sign In / Sign Up</button>
                                </div>
                            </div>
                    </nav>
                   
                </div>
            </div>
        );
    }
}

export default Header;