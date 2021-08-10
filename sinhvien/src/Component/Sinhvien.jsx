import React, { Component } from 'react'
import FormSignIn from './Layout/FormSignIn'
import FormSignUp from './Layout/FormSignUp'
import Page404 from './Layout/Page404'

export default class Sinhvien extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <a href="https://mtminhthuan0911.github.io/Form/"><img src="./Z.svg" alt="" className="LogoPage" /></a>
                    <Page404></Page404>
                    <FormSignIn></FormSignIn>
                    <FormSignUp></FormSignUp>
                </div>
            </div>
        )
    }
}
