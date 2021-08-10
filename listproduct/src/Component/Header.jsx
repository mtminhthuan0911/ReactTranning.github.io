import React, { Component } from 'react'
import {connect} from 'react-redux'
 class Header extends Component {

    renderslcart = () => {
        return this.props.gioHang.reduce((tssl,sgGH , index) => {
            return tssl += sgGH.SoLuong;
        }, 0)
    }


    render() {
        return (
            <div className="header">
                <div className="LogoPage">
                    <img  className="" src="./Z.svg" alt="" />
                </div>
                <ul className="menu">
                    <li className="menu-item"><a href="" className="menu-item-link">Home</a></li>
                    <li className="menu-item"><a href="" className="menu-item-link">Product</a></li>
                    <li className="menu-item"><a href="" className="menu-item-link"> Login / Resgiter</a></li>
                    <li className="menu-item"><a href="" className="menu-item-link" data-toggle="modal" data-target="#modelId">CartShop ({this.renderslcart()}) </a></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gioHang : state.ListProductReducer.gioHang
    }
}

export default connect(mapStateToProps)(Header)