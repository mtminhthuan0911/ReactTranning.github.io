import React, { Component } from 'react'

export default class Modal extends Component {

    render() {

        const {CartShop} = this.props
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
                                        <td>Name</td>
                                        <td>Image</td>
                                        <td>Quatity</td>
                                        <td>Price Buy</td>
                                        <td>Price Last</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    { 
                                        CartShop.map((cshop,index) => {
                                            return (
                                                <tr>
                                                    <td>{cshop.Name}</td>
                                                    <td><img className="img_Product" src= {cshop.Img} alt="" /></td>
                                                    <td>{cshop.SoLuong}</td>
                                                    <td>{(cshop.Price).toLocaleString()}</td>
                                                    <td>{(cshop.Price * cshop.SoLuong).toLocaleString()}</td>
                                            </tr>
                                            )
                                        } )
                                    }           
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>Total : </td>
                                        <td>{
                                                this.props.CartShop.reduce((pricelast,spgh,index) => {
                                                    return pricelast += (spgh.SoLuong * spgh.Price)
                                                },0).toLocaleString()
                                            }</td>
                                    </tr>
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
