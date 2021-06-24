import React, { Component } from 'react'

export default class Product extends Component {
    // thuộc tính


    // Phương Thức
    
    render() {
        // Nội Dung thẻ được định nghĩa trong hàm render
        return (
        <div className="wrapper">
            <div className="container">
                <div className="header">
                    <div className="header-logo"><img src="" alt="" /></div>
                    <ul className="header-menu">
                        <li className="header-menu-item"><a href="" className="header-menu-item-link">Home</a></li>
                        <li className="header-menu-item"><a href="" className="header-menu-item-link">About</a></li>
                        <li className="header-menu-item"><a href="" className="header-menu-item-link">Contact</a></li>
                        <li className="header-menu-item"><a href="" className="header-menu-item-link">Out</a></li> 
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}
