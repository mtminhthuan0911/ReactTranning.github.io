import React, { Component } from 'react'

// Kết Nối đến reducerGioHang

import {connect} from 'react-redux';

class SanPhamRedux extends Component {
    render() {
        const {dt} = this.props
        return (
        <div className="ListProduct-Card">
            <img src= {dt.Img} alt="" />
            <p className="ListProduct-Card-Name">{dt.TenSP}</p>
            <p className="ListProduct-Card-Price">{(dt.Price).toLocaleString()} $</p>
            <button onClick = {()=> this.props.themGioHang(dt)} className="btn primary">Add To Cart</button>
        </div>
        )
    }
}
// xây dựng hàm tạo ra props là hàm xử lý sự kiện =) để đưa dữ liệu lên Store

const mapDispatchToProps = (dispatch) => {
    return{
        // Tạo ra props component (đưa dữ liệu lên store ) ;
        themGioHang : (dt) => {
            const spGioHang = {
                MASP :dt.MASP,
                TenSP:dt.TenSP,
                Img:dt.Img,
                SoLuong: 1,
                Price:dt.Price
            }
            // Tạo Action đưa dữ liệu lên reducer
            const action = {
                type : 'Add_To_Cart', 
                // Type là bắt buộc chứa nội dụng gửi lên Reducer
                spGioHang 
                // Nội Dung gửi lên reducer
            }
            console.log(action)
            // Dùng Hàm dispatch đưa dữ liệu action lên reducer
            dispatch(action);
        }

    }
}

export default connect(null,mapDispatchToProps)(SanPhamRedux)