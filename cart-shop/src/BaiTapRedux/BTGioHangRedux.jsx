import React, { Component } from 'react'
import DanhSachSPRedux from './DanhSachSPRedux'
import ModalGioHangRedux from './ModalGioHangRedux'

export default class BTGioHangRedux extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <p className="txtHeading">Cart - Redux</p>
                    <ModalGioHangRedux></ModalGioHangRedux>
                    <DanhSachSPRedux></DanhSachSPRedux>
                </div>
            </div>
        )
    }
}
