import { stat } from 'fs';
import React, { Component } from 'react'

// Thư Viện kết nối redux (connect hàm kết nối reactComponent và reduxStore)
import {connect} from 'react-redux';

class ModalGioHangRedux extends Component {
    
    renderGioHang = () => {
        return this.props.gioHang.map((spgh, index) => {
            return (
                <tr key={index}>
                        <td>{spgh.TenSP}</td>
                        <td><img src= {spgh.Img} className="img_Product" alt="" /></td>
                        <td>{spgh.Price}</td>
                        <td>{spgh.SoLuong}</td>
                        <td>{spgh.SoLuong * spgh.Price}</td>
                        <button onClick = {()=> this.props.tanggiamsoluong(index,true)} className="btn btn-primary">Thêm</button>
                        <button onClick = {()=> this.props.tanggiamsoluong(index,false)} className="btn second">Giảm</button>
                        <button onClick= {()=> this.props.xoagiohangIndex(index)} className="btn btn-danger">Xóa</button>
                </tr>
            )
        })
    }

    render() {
        // this.props.gioHang là thuộc tính nhận từ redux
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quatity</th>
                            <th>Totals-present</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}

// Tạo ra giá trị từ redux dùng hàm : mapStateToProps

const mapStateToProps = (state) => { 
    // state là kho tổng truy xuất tới GioHangReducer => biến state trên GioHangReducer
    return {
        gioHang : state.GioHangReducer.gioHang
    }
}

// Thay đổi giá trị trong giỏ hàng : mapDispatchToProps

const mapDispatchToProps = (dispatch) => {
    return {
        xoagiohangIndex: (MASP) => {
            const action = {
                type : 'Xoa_Gio_Hang',
                MASP
            }
            console.log(MASP)
            // dispatch đưa action lên reducer
             dispatch(action);
        },
        tanggiamsoluong : (index,tanggiam) => {
            const action = {
                type: 'Tang_Giam_So_Luong',
                index,
                tanggiam
            }
            dispatch(action);
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ModalGioHangRedux)