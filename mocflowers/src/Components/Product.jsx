import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import giaythethao from '../JSON/giaythethao.json';
import Header from './Header';

export default class Product extends Component {

    renderDanhSachSp = () => {
        return giaythethao.map((giay,index) => {
            return (
                <div className="Product-List-Item">
                        <img src= {giay.Img} alt="" />
                        <p className="Name">{(giay.Name)}</p>
                        <p className="Price">{(giay.Price).toLocaleString()} $</p>
                        <button className="btn primary">Add To Cart</button>
                </div>
            )
        })
    }




    render() {
        return (
           <div className="Product">
               <div className="Product-List">
                   {this.renderDanhSachSp()}
               </div>
           </div>
        )
    }
}


    