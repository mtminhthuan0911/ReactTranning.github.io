import React, { Component } from 'react';

class Headers extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="header">
                        <ul className="header-menu">
                            <li className="header-menu-item"><a href="" className="header-menu-item-link">Home</a></li>
                            <li className="header-menu-item"><a href="" className="header-menu-item-link">About</a></li>
                            <li className="header-menu-item"><a href="" className="header-menu-item-link">Contact</a></li>
                            <li className="header-menu-item"><a href="" className="header-menu-item-link">Login</a></li>
                        </ul>
                    </div>
                    <div className="img">
                        <h1 className="img-h1">
                            abc
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Headers;
