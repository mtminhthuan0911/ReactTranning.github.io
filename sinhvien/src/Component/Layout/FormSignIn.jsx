import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ADDSV, Update } from '../Action/SinhvienAction';
 class FormSignIn extends Component {

    state = {
        value : {
            ID : 0,
            TaiKhoan : '',
            MatKhau : '',
            XacNhanMatKhau : '',
            HoTen : '',
            SDT : '',
            Email : ''
        },
        errors : {
            TaiKhoan : '',
            MatKhau : '',
            XacNhanMatKhau : '',
            HoTen : '',
            SDT : '',
            Email : ''
        }
    }

    ChangeBinding = (event) => {
        let {name,value,type} = event.target;
        let ValueUpdate = {...this.state.value,[name] : value};
        let ErrorsUpdate = {...this.state.errors};
        
        //Kiểm Tra rỗng cảnh báo
        if(value.trim() === '')
        {
            ErrorsUpdate[name] = name + ' ' + 'là bắt buộc'
        }
        else{
            ErrorsUpdate[name] = '';
        }
        //Kiểm tra khớp email
        if(type === 'email')
        {
            const rex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if(!rex.test(value))
            {
                ErrorsUpdate[name] = 'Email Invalid ! ';
            }
            else{
                ErrorsUpdate[name] = '';
            }
        }
        //kiểm tra xác nhận mật khẩu
        if(name === 'XacNhanMatKhau')
        {
            if(value !== ValueUpdate['MatKhau'])
            {
                ErrorsUpdate[name] = 'Mật Khẩu Không Khớp ! ';
            }
            else{
                ErrorsUpdate[name] = '';
            }
        }
        
        
        this.setState ({
            value : ValueUpdate,
            errors : ErrorsUpdate,
            User : event.target.value.TaiKhoan,
            TenSinhVien : event.target.value.TenSinhVien,
            Email : event.target.Email,
            SDT : event.target.SDT,
            MatKhau : event.target.MatKhau,

        } ,() => {
            console.log(this.state.value)
        })
        
    }



    render() {
        return (
            <form action="">
                <section className="Form">
                    <div className="Form-title">
                        <p>Form Đăng Ký</p>
                    </div>
                    <div className="Form-Component">
                        <div className="Form-Component-Left">
                            <div className="input">
                                <input value={this.state.User} onChange={this.ChangeBinding} name="TaiKhoan"  type="text" placeholder=" " />
                                <label  className="lb1" htmlFor=""> <i class="fa fa-user" aria-hidden="true"></i>Tài Khoản <span style={{color: 'red'}}>*</span> </label>
                                <p className="text text-danger">{this.state.errors.TaiKhoan}</p>
                            </div>
                           <div className="input">
                           <input value={this.state.MatKhau} onChange={this.ChangeBinding} name="MatKhau" type="password"  placeholder=" " />
                            <label className="lb2" htmlFor=""><i class="fa fa-lock" aria-hidden="true"></i> Mật Khẩu <span style={{color: 'red'}}>*</span>  </label>
                            <p className="text text-danger">{this.state.errors.MatKhau}</p>
                           </div>
                            <div className="input">
                                <input value={this.state.value.XacNhanMatKhau} onChange={this.ChangeBinding} name="XacNhanMatKhau" type="password"  placeholder=" " />
                                <label className="lb3" name="XacNhanMatKhau" htmlFor=""> <i class="fas fa-lock-open    "></i> Xác Nhận Mật Khẩu <span style={{color: 'red'}}>*</span></label>
                                <p className="text text-danger">{this.state.errors.XacNhanMatKhau}</p>
                            </div>
                            <div className="process">
                                <button onClick={ (event) => {
                                    event.preventDefault();
                                    let {ID,TaiKhoan , HoTen , SDT , Email , MatKhau} = this.state.value ; 
                                    let newsv = {
                                        id :   Date.now(),
                                        User : TaiKhoan , 
                                        TenSinhVien : HoTen , 
                                        SDT : SDT , 
                                        Email : Email , 
                                        MatKhau : MatKhau 
                                    }
                                    console.log(newsv);
                                    this.props.dispatch(ADDSV(newsv))

                                } }  className="btn primary">Đăng Ký</button>
                                <button onClick = {(e) => {
                                    e.preventDefault();
                                    this.props.dispatch(Update(this.state.value.TaiKhoan , this.state.value.HoTen ,this.state.value.SDT, this.state.value.Email ,this.state.value.MatKhau))
                                }} className="btn second">Cập Nhật</button>
                            </div>
                        </div>
                        <div className="Form-Component-Right">
                            <div className="input">
                                <input value={this.state.TenSinhVien} onChange={this.ChangeBinding}  name="HoTen" type="text"  placeholder=" " />
                                <label className="lb4" htmlFor=""> <i class="fa fa-info" aria-hidden="true"></i> Họ Tên </label>
                                <p className="text text-danger">{this.state.errors.HoTen}</p>
                            </div>
                            <div className="input">
                                <input value={this.state.SDT} onChange={this.ChangeBinding} name="SDT" type="text"  placeholder=" " />
                                <label className="lb5" htmlFor=""> <i class="fa fa-phone" aria-hidden="true"></i> SDT</label>
                                <p className="text text-danger">{this.state.errors.SDT}</p>
                            </div>
                            <div className="input">
                                <input value={this.state.Email} onChange={this.ChangeBinding} name="Email" type="email"  placeholder=" " />
                                <label className="lb5" htmlFor=""> <i class="fa fa-envelope-open" aria-hidden="true"></i> Email</label>
                                <p className="text text-danger">{this.state.errors.Email}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        )
    }
    // componentDidUpdate(preProps , preState)
    // {
    //     if(preProps.SinhVienEdit.id !== this.props.SinhVienEdit.id)
    //     {
    //         this.setState({
              
    //         })
    //     }
    // }
    componentDidUpdate(preProps , preState) 
    {   
        if(preProps.SinhVienEdit.id !== this.props.SinhVienEdit.id)
        {
            this.setState({
                User : this.props.SinhVienEdit.User,
                TenSinhVien : this.props.SinhVienEdit.TenSinhVien,
                MatKhau : this.props.SinhVienEdit.MatKhau,
                Email : this.props.SinhVienEdit.Email,
                SDT : this.props.SinhVienEdit.SDT,
            })
        }


        
    }
}

   



const mapStateToProps = state => {
    return {
        SinhVien : state.SinhVienReducer.SinhVien,
        SinhVienEdit : state.SinhVienReducer.SinhVienEdit
    }
}

export default connect(mapStateToProps)(FormSignIn)