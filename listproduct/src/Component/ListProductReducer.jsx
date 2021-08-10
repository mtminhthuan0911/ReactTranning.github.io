import React, { Component } from 'react'
import Header from './Header'
import Product from './Product'
import Modal from './Modal'
export default class ListProductReducer extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <Header></Header>
                    <Modal></Modal>
                    <div className="ListProduct">
                        <Product></Product>
                    </div>
                </div>
            </div>
        )
    }
}
