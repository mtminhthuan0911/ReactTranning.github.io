import React, { Component } from 'react'
import MangChiTiet from './MangChiTiet';
export default class MangLaptop extends Component {
    
    constructor(props){
        super(props);
    }
    
    
    TTchitiet = (CPU) => {

        alert(CPU)
    }


    render() {
        const manglaptop_class = this.props
        const {MASP,Img,TenSP,CPU,Price} = this.props.manglaptop_class;

        return (
            <div className="ListProduct-card">
                <img src= {Img} alt="" srcset="" />
                <div className="content">
                    <p className="content-name">{TenSP}</p>
                    <p className="content-desct">{Price}</p>
                </div>
                <button className="btn primary" onClick={() => this.TTchitiet(TenSP)}   >Thêm Giỏ Hàng</button>
            </div>
        )
        
    }
    
}
