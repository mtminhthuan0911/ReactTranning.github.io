import React, { Component } from 'react'

export default class Modal extends Component {

    render() {

        const {gioHang,xoagiohang,tanggiamsoluong} = this.props 
        // lấy dữu liệu từ component truyền vào



        return (
            <div>
                 <div>
                    {/* Button trigger modal */}
                    {/* Modal */}
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title">Cart Shop</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                   <thead>
                                   <tr>
                                       <td>ProductName </td>
                                       <td>Image</td>
                                       <td>Price</td>
                                       <td>Quatity</td>
                                       <td>Total</td>
                                   </tr>
                                   </thead>
                                   <tbody>
                                       {gioHang.map((spgh,index) => {
                                           return(
                                               <tr>
                                                    <td>{spgh.TenSP}</td>
                                                    <td><img className="img_Product" src= {spgh.Img} alt="" /></td>
                                                    <td>{(spgh.Price).toLocaleString()}</td>
                                                    <td>{spgh.SoLuong}</td>
                                                    <td>{(spgh.Price * spgh.SoLuong).toLocaleString()}</td>
                                                    <td><button onClick = { () => tanggiamsoluong(spgh.MASP,false) }  className="btn second">Giảm</button></td>
                                                    <td><button  onClick = { () => tanggiamsoluong(spgh.MASP,true) } className="btn btn-primary">Thêm</button></td>
                                                    <td><button onClick= { () => xoagiohang (spgh.MASP) } className="btn btn-danger">xóa</button></td>
                                               </tr>
                                           )
                                       })}
                                   </tbody>
                                   <tfoot>
                                       <td>Totals Bill</td>
                                       <td>
                                           {
                                               this.props.gioHang.reduce((tongtien,spGH,index) => {
                                                   return tongtien += (spGH.SoLuong * spGH.Price)
                                               },0).toLocaleString()
                                           }
                                       </td>
                                   </tfoot>
                                </table>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

            </div>
        )
    }
}
