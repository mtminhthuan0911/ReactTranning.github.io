import React, { Component } from 'react'
import  dienthoai from '../Json_data/dienthoai.json'
import MangLaptop from './MangLaptop'

export default class MangChiTiet extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            manglaptop : dienthoai[0]
        }
    }

   
   

    render = () => {
        const {Img,TenSP,Price,CPU} = this.state.manglaptop
        return (
        <div className="ListProduct_Details">
            <img src= {Img} alt="" className="ListProduct_Details-Img" />
            <div className="ListProduct_Details-Info">
                <p className="Title">{TenSP}</p>
                <p className="Price">{Price}</p>
                <p className="CPU">{CPU}</p>
            </div>
        </div>
        )
    }
}
