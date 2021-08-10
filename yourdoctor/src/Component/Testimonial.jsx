import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
 class Testimonial extends Component {

    renderUser = () => {
        return this.props.User.map((us , index) => {
            return (
                <SplideSlide>
                    <div key={index} className="Customer-Block">
                        <img src= {us.Img} alt="" className="Logo" />
                    </div>
                </SplideSlide>
                
            )
        })
    }


    render() {
        return (
            <div className="TestiMonial">
                <div className="container">
                    <p className="title">
                        - Testimonial
                    </p>
                    <p className="header">
                        Customers <span>cooperate</span> with Us 
                    </p>
                    <div className="Customer">
                    <Splide options={ {
                rewind : true,
                arrows : true,
                pagination: false,
                perPage: 4,
                perMove: 1,
                gap    : '1rem',
                autoplay : true,
                interval : 4000,
                lazyLoad : true,
            } }
            onMoved={ ( splide, newIndex ) => { console.log( 'moved', newIndex ) } }>
               {this.renderUser()}
           </Splide>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        User : state.ProductReducer.User
    }
}

export default connect(mapStateToProps)(Testimonial)