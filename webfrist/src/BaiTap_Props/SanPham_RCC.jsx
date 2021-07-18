import React, { Component } from 'react'

export default class SanPham_RCC extends Component {

    constructor(props)
    {
        super(props);
    }

    TTrender = (mota) => {
        alert(mota);
    }

    render() {

        // const {sanpham_class} = this.props;
        const {hinhAnh,tenPhim,moTa} = this.props.sanpham_class;
        return (
                
                 <div className="ListProduct-card">
                        <img src={hinhAnh} alt = ""/>
                        <div className="content">
                            <p className="content-name">
                                {tenPhim}
                            </p>
                            <p className="content-desc">
                                Mô Tả Phim
                            </p>
                            <button onClick={() => this.TTrender(moTa)}>Chi tiết Phim</button>
                        </div>
                   </div>
           
        )
    }
}
