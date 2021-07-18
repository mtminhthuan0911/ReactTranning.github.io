import React, { Component } from 'react';
import { Fragment } from 'react';
import ghephim from '../JSON/ghephim.json'
class DanhSachGhe extends Component {


    renderGhe = () => {
        return ghephim.danhSachGhe.map((ghe,index) => {
            let cssGheDaDat = '';
            if(ghe.daDat) 
            {
                cssGheDaDat = 'gheDuocChon'
            }
            return <button className="btn primary" key={index}>
                    {index+1}
            </button>
        })
    }

    renderHangGhe = () => {
       return ghephim.map((gphim,index) => {
           return (
               <Fragment key={index}>
                    <button className="booking">{gphim.hang}</button>    {this.renderGhe()}  
               </Fragment>
           )
       })
    }

    render() {
        return (
            <div className="danhsachghe">
                <p className="danhsachghe-txt">
                    Màn Hình
                </p>
                <div className="screen"></div>
                <div className="ghe">
                    {this.renderHangGhe()}
                   
                </div>
            </div>
        );
    }
}

export default DanhSachGhe;