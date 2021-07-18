import React, { Component } from 'react'
import dienthoai from '../JSON/dienthoai.json'
import DSCart from './DSCart'

export default class DanhSachSP extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            mangdienthoai : dienthoai
        }
    }


    renderMangSp = () => {
        const {themgiohang} = this.props
        return this.state.mangdienthoai.map((dt, index) => {
            return (
                <div key={index}>
                    <DSCart themgiohang = {themgiohang} mangdienthoaiA = {dt}></DSCart>
                </div>
            )
        })
    }



    render() {
        return (
            <div className="container">
                <p className="txtheader">List Product</p>
                <div className="ListProduct">
                    {this.renderMangSp()}
                 </div>  
            </div>
        )
    }
}


 