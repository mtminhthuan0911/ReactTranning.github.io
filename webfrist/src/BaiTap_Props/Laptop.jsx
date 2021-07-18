import React, { Component } from 'react';
import MangLaptop from './MangLaptop'
import dienthoai from '../Json_data/dienthoai.json';
import MangChiTiet from './MangChiTiet';
import Modal from './Modal';


class Laptop extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            manglaptop : dienthoai
        }
    }

    renderMangSP = () => {
        return this.state.manglaptop.map((laptop, index) => {
            return (
                <div key={index}>
                    <MangLaptop manglaptop_class = {laptop}></MangLaptop>
                </div>
            )
        } )
    }
 
    renderChitietSP = () => {
        return (  
            <div>
                <MangChiTiet></MangChiTiet>
            </div>
        )
    }

   
    
   


    render() {
        return (
            <div className="container">
                <p className="txtheader">Render Sản Phẩm Laptop</p>
               
                <p className="txtcart" > Giỏ Hàng <span>(0) </span></p>
               
                <div className="ListProduct">
                        {this.renderMangSP()}
                </div>
                {/* <div className="contaienr">
                    <p className="txtheader">Chi Tiết sản phẩm</p>
                    {this.renderChitietSP()}
                </div> */}
                
                
                
                <Modal></Modal>
               
            </div>
        );
    }
   
}

export default Laptop;