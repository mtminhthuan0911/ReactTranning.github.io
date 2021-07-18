import React, { Component } from 'react'
import DanhSachGhe from './DanhSachGhe'
import HoaDon from './HoaDon'
export default class DatVePhimReducer extends Component {
    render() {
        return (
            <div className="backgroundbody">
                <div className="overlay"></div>
                <div className="wrapper">
                    <div className="container">
                        <p className="txtHeading">Booking Ticket 2021 Redux</p>
                        <div className="Block">
                            <DanhSachGhe></DanhSachGhe>
                            <HoaDon></HoaDon>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
