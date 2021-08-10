import React, { Component , PureComponent } from 'react'

export default class About extends PureComponent {
    render() {
        return (
            <section className="aboutUS">
            <div className="overlay"></div>
            <div className="container">
            <div className="Image">
                    <div className="round"></div>
                   <img className="doctor" src="./img/doctor2.png" alt="" />
                   <div className="heartred"><img className="heartred-SL" src="./img/Heartsvg.svg" alt="" /></div>
               </div>
               <div className="content">
                   <p className="txt">- About Us</p>
                   <h2 className="txtHeading">YourDoctor <span>Vision & Mission</span></h2>
                   <p className="txtdesc">At YourDoctor , our vision is to be a role model for international standard healthcare . 
                   Our mission is to always strive to provide the best quality treatment and patient care by professionals who are competent in their fields with hight ethics </p>
                   <div className="Process">
                    <button className="btn primary">Book an Appointment <i class="fa fa-calendar-plus-o" aria-hidden="true"></i></button>
                   </div>
               </div>
            </div>
        </section>
        )
    }
}
