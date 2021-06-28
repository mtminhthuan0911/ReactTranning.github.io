import React, { Component } from 'react';

class DemoIF extends Component {

    constructor(props){
        super(props);
        //  this.state là thuộc tính có sẵn của components , chứa các thuôc tính có khả năng render lại components
        this.state = {
             // Thuoc tinh : 
            isLogin : false,
            username : 'Good Morning'
        }
        
    }    

    login = () =>{
        // setState() đây là phương thức kế thừa từ class components , thay đổi giá trị state và gọi hàm render lại giao diện
        // setState là phương thức bất đồng bộ 
        this.setState({
           isLogin:true,
           username:'Minh Thuận'
       })
       console.log(this.state)
    }

    logout = () => {
        this.setState({
            isLogin: false,
            username:'Good Morning'
        })
    }

    //Phương Thức render của component *DemoIF*
    
    render() {
        return (
            <div className="container">

                {/* Nếu hàm isLogin đúng thì render ra biểu thức Hello .... ngươc lại render biểu thức Login */}
                
                {this.state.isLogin === true ? <div> <p className="txt">Hello {this.state.username} ! </p><br /> <button className="btn second" onClick={this.logout}>Logout</button></div> : 
                <div>
                    <p className="txt">{this.state.username}</p>
                    <button className="btn primary" onClick={this.login}>Login</button>
                </div>
                }
            </div>
        );
    }
}

export default DemoIF;





  //Cách Dùng 1 : Dùng phương thức kết hợp if để xác định nội dung render ra giao diện

    // renderContent = () =>{
    //     if(this.isLogin) //islogin = true; Người Dùng đẵ login
    //     {
    //         this.username = 'Minh THuan';
    //         return(
    //             <div className="NameLogin">
    //                 <p>
    //                     Hello {this.username}
    //                 </p>
    //                 <button>Logout</button>
    //             </div>
    //         )
    //     }
    //     return (<div>
    //         <button>Login</button>
    //     </div>)
    // }
