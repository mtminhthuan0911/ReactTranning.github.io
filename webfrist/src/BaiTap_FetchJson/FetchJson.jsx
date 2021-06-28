import React, { Component } from 'react'
import data from '../Json_data/data.json'

export default class FetchJson extends Component {

    // Tạo Biến Fetch data từ file Json : 

    constructor(props){
        super(props);
        this.state = {

            Dataphim: data
            
        }
    }

    renderJson = () => {
        return this.state.Dataphim.map((phim , index) => {
            return (
               
                <div className="ListProduct-card">
                        <img src= {phim.hinhAnh} alt= {phim.biDanh} />
                        <div className="content">
                            <p className="content-name">
                                {phim.tenPhim}
                            </p>
                            <p className="content-desc">
                                {phim.moTa}
                            </p>
                        </div>
                   </div>
             
            )
        })
    }


    render() {
        console.log(this.state.Dataphim);
        return (
            <div className="container">
                    <p className="txtheader">Danh Sách Phim</p>
                    <div className="ListProduct">
                        {this.renderJson()}
                    </div>
            </div>
        )
    }
}
