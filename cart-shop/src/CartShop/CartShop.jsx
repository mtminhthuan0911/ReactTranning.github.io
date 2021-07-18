import React, { Component } from 'react'
import DanhSachSP from './DanhSachSP'
import Modal from './Modal'
import dienthoai from '../JSON/dienthoai.json'

export default class CartShop extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            gioHang:[
                {
                    "MASP": 1,
                    "Img" : "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                    "TenSP":"MacbookPro 2016",
                    "CPU" : "Intel",
                    "Price": 2000,
                    "SoLuong":1
                }
            ]
        }
    }

    // Lấy dữ liệu tại component CartShop 
    // B1: từ sản phẩm được chọn tạo ra sản phẩm giỏ hàng : 
    themgiohang = (sanphamclick) => {
            console.log(sanphamclick)
            let spGioHang = {

                MASP : sanphamclick.MASP,
                Img :  sanphamclick.Img,
                "TenSP": sanphamclick.TenSP, 
                Price: sanphamclick.Price,
                SoLuong:1

            }
                // Kiểm Tra sản phẩm click có trong giỏ hàng chưa
                // Dùng Ham FindIndex

                var gioHangCapNhat = [...this.state.gioHang];
                let index = gioHangCapNhat.findIndex(sp => sp.MASP  === spGioHang.MASP);
                if(index!==-1)
                {
                    gioHangCapNhat[index].SoLuong +=1;
                    
                    // Nếu sản phẩm đã có trong giỏ hàng thì tăng số lượng lên 1
                }else{
                    gioHangCapNhat.push(spGioHang);
                    // Ngược lại nếu sản phẩm chưa có thì thêm sản phẩm vào giỏ hàng
                }


            
            this.setState({
                gioHang : gioHangCapNhat
            })
    }

    // Sự kiện button xóa sản phẩm trong giỏ hàng : 
    xoagiohang = (MASP) => {
        // Cách 1 dùng Findindex để tìm tới mã sản phẩm khi nhận sự kiện onclick
        // var giohangcapnhat = [...this.state.gioHang];
        // let index = giohangcapnhat.findIndex(sp => sp.MASP === MASP);
        // if(index !==-1) {
        //     giohangcapnhat.splice(index,1)
        // }

        // Cách 2 : Dùng Ham Fillter() tìm tới mã Sản phẩm khác với mã sản phẩm hiện được click 

            var giohangcapnhat = this.state.gioHang.filter(sp => sp.MASP !== MASP)

        // cập nhật lại state gio hang
        this.setState({
            gioHang : giohangcapnhat
        })
    }

    // tanggiam === true : tăng số lượng , false giảm số lượng 
    
    tanggiamsoluong = (MASP,tanggiam) =>  
    {
        var giohangcapnhat =  [...this.state.gioHang];
        let index = giohangcapnhat.findIndex(sp => sp.MASP === MASP)
        if(tanggiam)
        {
            giohangcapnhat[index].SoLuong += 1;
        }else
        {
            if(giohangcapnhat[index].SoLuong > 1)
            {
                giohangcapnhat[index].SoLuong -= 1;
            }
         }
         this.setState({
            gioHang : giohangcapnhat
        })
    }




    render() {

        // Sử dụng ham reduce để render số lượng sản phẩm tăng
        let TongSL = this.state.gioHang.reduce((ttsl,spGH,indedx) => {
            return ttsl += spGH.SoLuong;
        },0)

        return (
            <div className="wrapper">
                <div className="container">
                    <img src="../../public/Z.png" alt="" />
                    <p className="txtCart" data-toggle="modal" data-target="#modelId">Cart ({TongSL})</p>
                    <DanhSachSP  themgiohang = {this.themgiohang} ></DanhSachSP>
                    <Modal tanggiamsoluong = {this.tanggiamsoluong}  xoagiohang = {this.xoagiohang} gioHang = {this.state.gioHang}></Modal>
                </div>
            </div>
        )
    }
}
