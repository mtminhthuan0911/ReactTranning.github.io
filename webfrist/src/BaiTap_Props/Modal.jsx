import React, { Component } from 'react'
import ReactDOM from 'react-dom';
export default class Modal extends Component {
    render() {
        return (
            <div>
               <div className="modal">
                   <div className="modal-content">
                       <p className="modal-content-heading">Sản Phẩm</p>
                       <thead>
                           <td>Tên Sản Phẩm</td>
                           <td>Hình ảnh</td>
                           <td>Giá Sản phẩm</td>
                           <td></td>
                       </thead>
                       <div className="process">
                           <button className="btn primary" onClick={ () => this.isShowing()}>
                               Close
                           </button>
                           <button className="btn second">
                               Save
                           </button>
                       </div>
                   </div>
                   
               </div>
            </div>
        )
    }
}
