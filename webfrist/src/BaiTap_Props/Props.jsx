import React, { Component } from 'react'
import data from '../Json_data/data.json'
import SanPham_RCC from './SanPham_RCC'


export default class Props extends Component {

    constructor(props){
        super(props)
        this.state = {
            mangsanpham : data
        }
    }

    // Props là gì : 
    //  + Property( thuộc tính của thẻ hmtl ) 
    
    // vd : <input (Classname = "") => là props /> 

    // Props đối với các component : 
    // + Là thuộc tính mặc định để nhận dữ liệu từu các giá trị component cha truyền vào => binding dữ liệu ra component con tại html
    // Props của component chỉ nhận các thuộc tính được truyền vào từ component cha của nó và không thể bị chỉnh sửa bên trong component
    // Đối Với StateFul và Stateless component có cách sử dụng props khác nhau 

    rendercomponent = () => {
        return  this.state.mangsanpham.map((sanpham , index) => {
            return (
                <div>
                   <SanPham_RCC sanpham_class = {sanpham}></SanPham_RCC>
                </div>
            )
        })
    }
    

    render() {
        return (
            <div className="container">
                    <p className="txtheader">Render Sử Dụng Props</p>
                    <div className="ListProduct">
                        {this.rendercomponent()}
                    </div>
            </div>
        )
    }
}

