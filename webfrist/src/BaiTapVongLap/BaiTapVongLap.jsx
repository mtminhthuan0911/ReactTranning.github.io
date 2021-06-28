import React, { Component } from 'react';

class BaiTapVongLap extends Component {
    
    constructor(props){
        super(props);
        this.state = {
           mangsanpham:[
               { masp: 1 , tensp: 'Iphone 11' , gia: 1000},
               { masp: 2 , tensp: 'Iphon12' , gia: 2000},
               { masp: 3 , tensp: 'Iphone12 Pro Max' , gia: 3000},
               { masp: 4 , tensp: 'Iphone12 Pro ' , gia: 2000}
           ]
        }
    }

    // Viết Hàm Xử Lý bindding dữ liệu ra giao diện : 

    renderSP = () => {
        let TableContent =[];

        // 01 ---------- Cách Viết Dùng Map: Mỗi lần xử thì return về giá trị mới TableContent : là vùng chưa giá trị 

        TableContent = this.state.mangsanpham.map((sanpham , index) =>{
            return  <tr>
                        <td>{sanpham.masp}</td>
                        <td>{sanpham.tensp}</td>
                        <td>{sanpham.gia}</td>
                    </tr>
            
        } )

        // 02 ------- Cách Viết Thứ 2 dùng vòng lặp for để duyệt các phần tử trong mảng :  ---------------

        // for( let i = 0 ; i < this.state.mangsanpham.length ; i++)
        // {
        //     const sanpham = this.state.mangsanpham[i];
        //     console.log(sanpham);
        //     TableContent.push(
        //         <tr>
        //             <td>{sanpham.masp}</td>
        //             <td>{sanpham.tensp}</td>
        //             <td>{sanpham.gia}</td>
        //         </tr>
        //     )
        // }

        console.log(TableContent);
        return TableContent;
    }


    render() {
        return (
            <div className="container">
                <h2 className="Title">Demo Vòng Lập</h2>
                <table className="Data">
                    <thead>
                        <tr className="heading">
                            <td>Mã Sản Phẩm  </td>
                            <td>Tên Sản Phẩm  </td>
                            <td>Giá Sản Phẩm  </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSP()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BaiTapVongLap;