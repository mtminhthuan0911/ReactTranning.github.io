import React, { Component, Fragment } from 'react'
import { Plus , Xoa } from './Action/action';
import {connect} from 'react-redux';

 class Modal extends Component {

    renderGioHang = () => {
        return this.props.gioHang.map((spgh,index) => {
            return (
               
                  
                            <tbody key={index}>
                                <th>{spgh.Name}</th>
                                <th><img src= {spgh.Img} alt="" /></th>
                                <th>{spgh.Price}</th>
                                <th>{spgh.SoLuong}</th>
                                <th>{spgh.Price * spgh.SoLuong}</th>
                                <button onClick= {() => {
                                        this.props.dispatch(Plus(index,true))
                                }} className="btnmodal primary"> <i class="fa fa-plus" aria-hidden="true"></i> </button>
                                <button onClick= {() => {
                                        this.props.dispatch(Plus(index,false))
                                }} className="btnmodal second" style={{marginLeft:10}}> <i class="fa fa-minus" aria-hidden="true"></i> </button>
                                <button onClick= {() => {
                                        this.props.dispatch(Xoa(index))
                                }} className="btnmodal second" style={{marginLeft:10}} > <i class="fas fa-trash-alt"></i> </button>
                            </tbody>
                
            )
        })
    }


    render() {
        return (
            <div>
                <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>
                            <div class="modal-body">
                                   
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Image</th>
                                                <th>Price</th>
                                                <th>Quatity</th>
                                                <th>Totals-present</th>
                                            </tr>
                                        </thead>
                                        {this.renderGioHang()}
                                    </table>
                            </div>
                            <div class="modal-footer">
                               
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

const mapStateToProps  = (state) => {
    return {
        gioHang : state.ListProductReducer.gioHang
    }
}

export default connect(mapStateToProps)(Modal)