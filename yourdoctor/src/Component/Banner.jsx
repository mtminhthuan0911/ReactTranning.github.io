import React, { Component , PureComponent } from 'react';

class Banner extends PureComponent {
    render() {
        return (
            <div className="introduce">
            <div className="introduce-content">
                <p className="txt"> - Booking of doctor ‘s appointment</p>
                <h1 className="txtHeading">We Are Providing Best and Affordable <span>Health Care</span></h1>
                <p className="txtdesc">Our skilled doctors have tremendous experience with wide range of diseases to serve the needs of out patients . </p>
                <div className="Email">
                   <button className="btn primary">Book an Appointment <i class="fa fa-calendar-plus-o" aria-hidden="true"></i></button>
                   <button className="btn primary">Contact Doctor<i class="fa fa-users" aria-hidden="true"></i></button>
                </div>
            </div>
            <div className="introduce-doctor">
                 <div className="round"></div>
                 {/* <div className="round number"></div> */}
                 <div className="heart"><img className="heart-S" src="./img/Icon_uesr.svg" alt="" /></div>
                 <div className="heartred"><img className="heartred-SL" src="./img/Heartsvg.svg" alt="" /></div>
                <img src="./img/doctor.png" alt="" className="doctorPage" />
                <div className="info">
                    <i class="fas fa-phone-square"></i>
                     <p> 24/7 -  Call Center</p>
                </div>
                <div className="Check">
                    <i class="fas fa-user-md"></i>
                     <p>Live Chat - Doctor</p>
                </div>
            </div>
        </div>
        );
    }
}

export default Banner;