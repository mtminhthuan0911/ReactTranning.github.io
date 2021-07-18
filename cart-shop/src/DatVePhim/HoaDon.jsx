import React, { Component } from 'react';

class HoaDon extends Component {
    render() {
        return (
            <div className="hoadon">
                <p className="txtHoadon">List Booking</p>
                <div className="hoadon-BLock">
                     <div className="ghe"></div><span className="txt">Booked</span>
                </div>
                <div className="hoadon-BLock">
                     <div className="ghe booking"></div><span className="txt">Booking</span>
                </div>
                <div className="hoadon-BLock">
                     <div className="ghe unbook"></div><span className="txt">UnBook</span>
                </div>
                <div className="hoadon-chitiet">
                    <table className="table">
                        <thead className="table-chitiet">
                            <tr>
                                <td className="tdheading">So Ghe</td>
                                <td className="tdheading">Price</td>
                                <td className="tdheading">Cancel</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>75000</td>
                                <td className="Cancel">X</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Totals</td>
                                <td>75000</td>
                                <td className="zero"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        );
    }
}

export default HoaDon;