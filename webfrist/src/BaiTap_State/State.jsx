import React, { Component } from 'react'

export default class State extends Component {

    // State là gì : 

    // -----State là một thuộc tính mặc định của class kế thừa từ class component để quản lí trạng thái của component ----- 
    // Mỗi Khi state thay đổi thì hàm render sẽ được gọi chạy lại : 
    // Lưu ý : Muốn Component render lại ta phải thay đổi state thông qua phương thức set state không được gán trực tiếp 

    // Phương thức setState là phương thức bất ddoognf bộ có 2 ttham số  : 

        // + Tham số 1 : giá trị state mới 
        //  + Tham số 2 : callback thực thi ngay sau khi state thay đổi

    // Lưu ý : không được set lại giá trị state theo cách này this.state.ThuocTinh = [giá trị] 
    // Ta Set giá trị cảu state thông qua phương thức setState 

    // this.setState ({thuocTinh : [Gia Tri moi]})



    constructor(props){
        super(props);
        this.state = {
            img: <div className="img_zoom"><img src="./Media/NikePink.jpg" alt="" srcset="" /></div>
        }
    }    

    changecolor = (color) => {
        let imgProduct = '';
        switch(color){
            case 'red':
            {
                imgProduct = <div className="img_zoom"><img src="./Media/NikeRed.jpg" alt="" srcset="" /> </div>;
            }; break;
            case 'black':
                {
                    imgProduct = <div className="img_zoom"><img src="./Media/NikeBlack.jpg" alt="" srcset="" /></div>;
                }; break;

                case 'pink':
                    {
                        imgProduct = <div className="img_zoom"><img src="./Media/NikePink.jpg" alt="" srcset="" /></div>;
                    }; break;
        }
        // Gọi Phương Thức this.setState để truyền dữ liệu để render lại giao diện theo sự kiện
        this.setState({
            img: imgProduct
        })
    }


    render() {
        return (
           <div className="Select">
               <div className="Select-product">
                    <p className="Select-product-txt">Click button change button color</p>
                    {/* <div className="img_zoom">{this.state.img}</div> */}
                    <div>
                      <p>{this.state.img}</p>
                    </div>
               </div>
               <div className="Select-btn">
                   <button onClick={()=>this.changecolor('red')} className="Select-btn-change red">Red</button>
                   <button onClick={()=>this.changecolor('black')}className="Select-btn-change black">Black</button>
                   <button onClick={()=>this.changecolor('pink')}className="Select-btn-change pink">Pink</button>
               </div>
           </div>
        )
    }
}
