import React, { Component } from 'react'

export default class DSCart extends Component {

    constructor(props)
    {
        super(props);
    }


    render() {
        const {mangdienthoaiA,themgiohang} = this.props
        const {Img,TenSP,Price,CPU} = this.props.mangdienthoaiA
        return (
                <div className="ListProduct-Card">
                    <img src= {mangdienthoaiA.Img} alt="" />
                    <p className="ListProduct-Card-Name">{mangdienthoaiA.TenSP}</p>
                    <p className="ListProduct-Card-Price">{mangdienthoaiA.Price} $</p>
                    <button className="btn primary" onClick = {()=> themgiohang(mangdienthoaiA)} >Add To Cart</button>
                </div>
        )
        
    }
}
