import React, { Component } from 'react'
import giaytheothao from '../JSON/giaythethao.json'
import DSCart from './DSCart'
export default class DSSP extends Component {

    // state là component chứa nguồn dữ liệu thay đổi 

    constructor(props)
    {
        super(props)
        this.state = {
            manggiaythethao : giaytheothao
        }
    }


    rendermangsanpham = () => {
        const {Themgiohang} = this.props
        return this.state.manggiaythethao.map((giay,index) => {
            return(
                <div key={index}>
                    <DSCart Themgiohang = {Themgiohang} manggiaythethaoA = {giay} ></DSCart>
                </div>
            )
        })
    }
    

    render() {
        
            return (
                <div className="container">
                    <p className="txtheader">List Product</p>
                    <div className="ListProduct">
                       {this.rendermangsanpham()}
                    </div>  
                </div>
            )
    
        
    }
}
