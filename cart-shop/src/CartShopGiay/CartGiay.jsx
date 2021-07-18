import React, { Component } from 'react'
import giaythethao from '../JSON/giaythethao.json'
import DSSP from './DSSP.jsx'
import Modal from './Modal'

export default class CartGiay extends Component {

    // tạo state ở nơi chứa các nút phần xử lý

    constructor(props)
    {
        super(props)
        this.state = {
            CartShop : [
              {
                "Masp":"1",
                "Name": "Nike F1",
                "Img" : "https://images.unsplash.com/photo-1596568359553-a56de6970068?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80",
                "Price" : 4000,
                "SoLuong" : 1
              }
            ]
        }
    }
    

    Themgiohang = (add) => {
        let spGioHang = {
            Masp: add.Masp,
            Name: add.Name,
            Img : add.Img,
            Price : add.Price,
            SoLuong : 1
        }
        // Kiểm tra sản phẩm click đã có trong giỏ hang chwua ? 

        var giohangcapnhat =  [...this.state.CartShop];
        let index = giohangcapnhat.findIndex(sp => sp.Masp === spGioHang.Masp)
        if(index !== -1)
        {
            giohangcapnhat[index].SoLuong += 1
        }else{
            giohangcapnhat.push(spGioHang);
        }

        this.setState ({
            CartShop : giohangcapnhat
        })
    }


    render() {
        let TTSL = this.state.CartShop.reduce((ttsl,spgh,index) => {
            return ttsl += spgh.SoLuong;
        },0)
        return (
            <div className="wrapper">
                <div className="container">
                    <img className="Logo_page" src="./Z.png" alt="" srcset="" />
                    <p className="txtCart" data-toggle="modal" data-target="#modelId">Cart ({TTSL})</p>
                    <DSSP Themgiohang = {this.Themgiohang}></DSSP>
                    <Modal CartShop = {this.state.CartShop}></Modal>
                </div>
            </div>
        )
    }
}
