import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="container">
                    <div className="Block">
                        <div className="Logo">
                            <img className="LogoPage" src="./img/Logo1.svg" alt="" />    
                        </div>
                        <p className="txtdesc padding">1920 Holden Street San Deigo , CA 9389</p>
                        <p className="txtdesc padding">Call us : 1 - 800 - 323 - 3829</p>
                        <div className="Icons">
                            <i class="fa fa-facebook-square" aria-hidden="true"></i>
                            <i class="fa fa-twitter-square" aria-hidden="true"></i>
                            <i class="fab fa-instagram-square"></i>
                        </div>
                    </div>
                    <div className="Block">
                        <p className="txtHeading">Take a tour</p>
                        <p className="txtdesc">Features</p>
                        <p className="txtdesc">Pricing</p>
                        <p className="txtdesc">Product</p>
                        <p className="txtdesc">Support</p>
                    </div>
                    <div className="Block">
                        <p className="txtHeading">Our company</p>
                        <p className="txtdesc">About Us</p>
                        <p className="txtdesc">Blog</p>
                        <p className="txtdesc">Media</p>
                        <p className="txtdesc">Contact</p>
                    </div>
                    <div className="Block">
                        <p className="txtHeading">Subcribe</p>
                        <p className="txtdesc">About Us</p>
                    </div>
                </div>
            </section>
        )
    }
}
