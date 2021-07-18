import React, { Component } from 'react'

export default class DSCart extends Component {

    constructor(props)
    {
        super(props)
    }


    render() {
        const {manggiaythethaoA,Themgiohang} = this.props
        return (
            
                 <div className="ListProduct-Card">
                    <img src= {manggiaythethaoA.Img} alt="" />
                    <p className="ListProduct-Card-Name">{manggiaythethaoA.Name}</p>
                    <p className="ListProduct-Card-Price">{(manggiaythethaoA.Price).toLocaleString()} $</p>
                    <button className="btn primary" onClick ={()=> Themgiohang(manggiaythethaoA)}>Add To Cart</button>
                </div>
           
        )
    }
}
