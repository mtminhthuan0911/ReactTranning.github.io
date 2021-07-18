import React, { Component } from 'react'
import Swal from 'sweetalert2';


export default class UserProfile extends Component {

    state = {
        value : {
            UserName : '',
            password : '',
            passwordConfirm : '',
            Email : '',
            FName : '',
            LName : ''
        },
        errors : {
            UserName : '',
            password : '',
            passwordConfirm : '',
            Email : '',
            FName : '',
            LName : ''
        }
    }

    ChangeBinding = (event) => {
        let {name,value,errors,type} = event.target;
        
        let ValueUpdate = {...this.state.value,[name] : value};
        let ErrorsUpdate = {...this.state.errors}
        if(value.trim() === '')
        {
            ErrorsUpdate[name] =  name + ' '+'is required !';
        }
        else{
            ErrorsUpdate[name] = '';
        }

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

        if(name === 'passwordConfirm')
        {
            if(value !== ValueUpdate['password'])
            {
                ErrorsUpdate[name] = 'Password Invalid ! ';
            }
            else{
                ErrorsUpdate[name] = '';
            }
        }
        

        this.setState ({
            value : ValueUpdate,
            errors : ErrorsUpdate
        })
    }

    HandleSubmit = (event) => {
        event.preventDefault(); //hàm cản trình duyệt khi submit reload lại trang
        //xét Điều kiện khi submit
        let {value,errors} = this.state;
        let valid = true;
        let profilecontent = '';
        let ercontent = '';
        console.log('value',value);
        // for in là hàm dùng để quét qua tất cả các thuộc tính của 1 object
        for(let key in value) {
            if(value[key] == '')
            {
                
                valid = false;
            }
            profilecontent += `
                <div className="content">
                    <p class="text-left"><b>${key}</b> : ${value[key]}</p>
                </div>
            `
        }
        for(let key in errors)
        {
            if(errors[key] !== '' )
            {
                ercontent += `
            <div className="content">
            <p class="text-left"><b>${key} is invalid</p>
        </div>
            `
                valid = false;
            }
            
        }

        if(!valid)
        {
            Swal.fire({
                position: 'top-center',
                icon: 'errors',
                html : ercontent,
                title: 'Dữ liệu chưa hợp lệ',
                showConfirmButton: true,
                
              })
            return;
        }else{
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Thành Công',
                html  : profilecontent,
                showConfirmButton: true,
                
              })
            return ;
        }
    }

    


    render() {
        return (
            <div className="wrapper">
                <div className="container">
                        <p className="txtHeading">Bài Tập Form Validation</p>
                        <div className="Validation">
                            <form onSubmit = {this.HandleSubmit} action="" className="Validation-From">
                            <p className="txtTitle">User Profile</p>
                                <div className="Validation-From-Content">
                                    <div className="FName_LName">
                                        <div className="Fname">
                                            <label  className="lbl"  htmlFor="">FristName <span>*</span></label>
                                            <input value = {this.state.value.FName} className="inputtxt" name="FName" type="text" placeholder="Minh" onChange = {this.ChangeBinding} />
                                            <p className="text text-danger">{this.state.errors.FName}</p>
                                        </div>
                                        <div className="Lname">
                                            <label  htmlFor="">LastName <span>*</span></label>
                                            <input value = {this.state.value.LName} type="text" name="LName" onChange = {this.ChangeBinding} placeholder="Thuan" />
                                            <p className="text text-danger">{this.state.errors.LName}</p>
                                        </div>
                                    </div>
                                    <div className="UserName">
                                        <label className="lbl" htmlFor="">UserName <span>*</span></label>
                                        <input value = {this.state.value.UserName} type="text" name="UserName" onChange = {this.ChangeBinding} placeholder="Minh Thuan 0911" required/>
                                        <p className="text text-danger">{this.state.errors.UserName}</p>
                                    </div>
                                    <div className="Email">
                                        <label className="lbl" htmlFor="">Email <span>*</span></label>
                                        <input value = {this.state.value.Email} type="Email" name="Email" onChange = {this.ChangeBinding} placeholder="abc@gmail.com"required />
                                        <p className="text text-danger">{this.state.errors.Email}</p>
                                    </div>
                                    <div className="Password_PasswordCF">
                                        <div className="Password">
                                            <label className="lbl" htmlFor="password">Password <span>*</span></label>
                                            <input value = {this.state.value.password} name="password" onChange = {this.ChangeBinding} type="password" placeholder="" required />
                                            <p className="text text-danger">{this.state.errors.password}</p>
                                        </div>
                                        <div className="PasswordCF">
                                            <label className="lbl" htmlFor="">Password Confirm <span>*</span></label>
                                            <input value = {this.state.value.passwordConfirm} name="passwordConfirm" onChange = {this.ChangeBinding} className="lbl" type="password" placeholder="" required/>
                                            <p className="text text-danger">{this.state.errors.passwordConfirm}</p>
                                        </div>
                                    </div>
                                    <div className="Submit">
                                        <button type= "submit"  className="btn primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        )
    }
}
