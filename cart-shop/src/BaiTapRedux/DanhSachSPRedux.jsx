import React, { Component } from 'react'
import dienthoai from '../JSON/dienthoai.json';
import SanPhamRedux from './SanPhamRedux';

export default class DanhSachSPRedux extends Component {
    // Call Back Mảng sản phẩm : 

    renderDSSP = () => {
        return dienthoai.map((dt,index) => {
            return (
                <div className="a" key={index}>
                    <SanPhamRedux dt = {dt}></SanPhamRedux>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <p className="txtheader">List Product</p>
                <div className="ListProduct">
                 {this.renderDSSP()}
                </div>
            </div>
        )
    }
}
