import React, { Component } from 'react'

export default class SubmitEmail extends Component {
    render() {
        return (
            <div className="EmailSubmit">
                <div className="container">
                    <p className="titile"> - Let Do It -</p>
                    <p className="heading">" Don't Delay Care For You <span>and Those You Love</span> "</p>
                    <div className="Email">
                       <div className="Email-Submit">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <input type="text" placeholder="Enter Your Email"/>
                            <button className="btn second">Book an Appointment</button>
                            <div className="round"></div>
                            <div className="round1"></div>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}
