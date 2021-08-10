import { thisExpression } from '@babel/types';
import React, { Component, Fragment } from 'react'
import giaythethao from '../Json/giaythethao.json';
import { AddToCart } from './Action/action';
import { connect } from 'react-redux';
 class Product extends Component {

    render() {
        return giaythethao.map((sneaker , index ) => {
            return (
                <Fragment key={index}>
                        
                            <div className="ListProduct-item">
                                <img className="ListProduct-item-image" src= {sneaker.Img}alt="" />
                                <p className="ListProduct-item-name">{sneaker.Name}</p>
                                <p className="ListProduct-item-price">{(sneaker.Price).toLocaleString()} $</p>
                                <button onClick = {() => {
                                        const spGioHang = {
                                            Masp : sneaker.Masp,
                                            Name : sneaker.Name,
                                            Img : sneaker.Img,
                                            Price : sneaker.Price,
                                            SoLuong : 1
                                        }
                                        console.log(spGioHang);
                                        this.props.dispatch(AddToCart(spGioHang))
                                    }

                                } className="btn primary">Add To Cart</button>
                            </div>
                       
                </Fragment>
            )
        })
        
    }
}

export default connect()(Product)

