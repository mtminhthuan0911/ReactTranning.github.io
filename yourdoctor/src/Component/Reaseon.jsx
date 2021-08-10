import React, { Component } from 'react'

export default class Reaseon extends Component {
    render() {
        return (
            <div className="Block3">
                <div className="container">
                    <div className="Reason">
                        <div className="Content">
                            <p className="txt">- Our Facilities</p>
                            <h1 className="txtHeading">Personal Service & <span>Good</span> Attempt</h1>
                            <p className="txtdesc">To make your treatment feel comfortable and according to what you expect , we provide the following facilities</p>
                            <ul className="Content-reason">
                                <li className="Content-reason-item"><i class="fa fa-check-circle" aria-hidden="true"></i> Up-to-date diagnostic and operating equipment</li>
                                <li className="Content-reason-item"><i class="fa fa-check-circle" aria-hidden="true"></i>Laboratory and Pharmacy</li>
                                <li className="Content-reason-item"><i class="fa fa-check-circle" aria-hidden="true"></i>Systematic and well-structured appointment with doctors</li>
                                <li className="Content-reason-item"><i class="fa fa-check-circle" aria-hidden="true"></i>Waiting area with snack bar , playground and hight speed WIFI</li>
                                <li className="Content-reason-item"><i class="fa fa-check-circle" aria-hidden="true"></i>Optics - glasses and contact lenses</li>
                                <li className="Content-reason-item"><i class="fa fa-check-circle" aria-hidden="true"></i>Islamic Prayer Room</li>
                            </ul>
                        </div>
                        <div className="Doctor">
                            <div className="round"></div>
                            <div className="round"></div>
                            <img src="./img/doctor6.png" alt="" className="doctor" />
                            <div className="info">
                                <i class="fas fa-phone-square"></i>
                                <p> 24/7 -  Call Center</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
