import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="header">
                        <ul className="menu">
                            <li className="menu-item"><a href="" className="menu-item-link">Home</a></li>
                            <li className="menu-item"><a href="" className="menu-item-link">Product</a></li>
                            <li className="menu-item"><a href="" className="menu-item-link">Cart <i class="fas fa-cart-plus"></i></a></li>
                        </ul>
                    </div>
                    {/* <div className="banner">
                        <img className="Img" src="./Banner.jpg" alt="" />
                    </div> */}
                </div>
            </div>
        )
    }
}
