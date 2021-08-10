import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { ADDSV, DELSV, EDIT } from '../Action/SinhvienAction'
 class FormSignUp extends Component {

    renderSinhVien = () => {
        return this.props.SinhVien.map((sv , index) => {
            return (
                <Fragment key={index}>
                            <tr>
                             
                                <td>{sv.User}</td>
                                <td>{sv.TenSinhVien}</td>
                                <td>{sv.MatKhau}</td>
                                <td>{sv.Email}</td>
                                <td>{sv.SDT}</td>
                                 <td><button onClick={()=>{

                                    this.props.dispatch(EDIT(sv))
                                     
                                 }} className="btn second"><i class="fas fa-edit"></i></button></td>
                                <td><button onClick= {() => {
                                    this.props.dispatch(DELSV(sv.id))
                                }} className="btn processbtn"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                            </tr>
                </Fragment>
            )
        })
    }
    


    render() {
        return (
            <div className="Form">
                 <div className="Form-title">
                    <p>Form Tài Khoản</p>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tài Khoản</th>
                            <th>Họ Tên</th>
                            <th>Mật Khẩu</th>
                            <th>Email</th>
                            <th>SDT</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.renderSinhVien()}
                   
                    </tbody>
                </table>
            </div>
        )
    }
}


//  componentDidUpdate(preProps , preState) 
//     {   
//         if(preProps.SinhVienEdit.id !== this.props.SinhVienEdit.id)
//         {
//             this.setState({
//                 User : this.props.SinhVienEdit.User,
//                 HoTen : this.props.SinhVienEdit.User,
//                 Email : this.props.SinhVienEdit.User,
//                 MatKhau : this.props.SinhVienEdit.User,
//                 SDT : this.props.SinhVienEdit.User
                
//             })
//         }


        
//     }


 const mapStateToProps = state => {
    return {
        SinhVien : state.SinhVienReducer.SinhVien,
        SinhVienEdit : state.SinhVienReducer.SinhVienEdit
    }
}

export default connect(mapStateToProps)(FormSignUp)