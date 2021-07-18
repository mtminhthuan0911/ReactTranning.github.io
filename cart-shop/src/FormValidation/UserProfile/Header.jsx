import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import UserProfile from './UserProfile';
import SignProfile from './SignProfile';

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <div className="container">
                    
                    <a rel="stylesheet" href="/signin"><button className="btn primary">Sign In</button></a>
                    <a href="/signup"><button className="btn second">Sign Up</button></a>
                
                    <Switch>
                        <Route path="/signin" component = {SignProfile}> 
                        <SignProfile></SignProfile>        
                        </Route>
                        <Route path="/signup" component = {UserProfile}>
                            <UserProfile></UserProfile>
                        </Route>
                    </Switch>
                
                    </div>
                </div>
            </Router>
        )
    }
}
