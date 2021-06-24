import React, { Component } from 'react';

class DemoIF extends Component {
    // Thuoc tinh : 
    isLogin = false;
    username = 'Minh Thuận';

    handleShowMessage = (message) => {
        alert(message);
    }
    

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



    //Phương Thức render của component *DemoIF*
    
    render() {
        return (
            <div>
                
                {this.isLogin ? <div>Hello {this.username} ! <button>Logout</button></div> : 
                
                    <button>Login</button>
                }
            </div>
        );
    }
}

export default DemoIF;