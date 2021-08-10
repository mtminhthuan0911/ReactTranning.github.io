import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
class Doctor extends Component {

    renderBacSi = () => {
        return this.props.BacSi.map((bs , index) => {
            return (
                <SplideSlide>
                <div key={index} className="ListProduct-Card">
                    <img className="card" data-splide-lazy="path-to-the-image" src= {bs.Img} alt="" />
                    <p className="ListProduct-Card-Name">{bs.NameDocTor}</p>
                    <p className="ListProduct-Card-Desc">{bs.Department}</p>
                    <p className="ListProduct-Card-Price"> + {bs.Patient} patient</p>
                </div>
            </SplideSlide>
            )
        })
    }



    render() {
        return (
            <div className="background_Light">
                <div className="overlay"></div>
                <div className="container">
            <p className="txtheader">
                 - Our Doctors - 
            </p>
            <p className="txtHead">
                <span>Our Hight</span> Qualified Doctors
            </p>
           <Splide options={ {
                rewind : true,
                arrows : false,
                pagination: false,
                perPage: 4,
                perMove: 1,
                gap    : '1rem',
                autoplay : true,
                interval : 4000,
                lazyLoad : true,
            } }
            onMoved={ ( splide, newIndex ) => { console.log( 'moved', newIndex ) } }>
               {this.renderBacSi()}
           </Splide>
        </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        BacSi : state.ProductReducer.BacSi
    }
}


export default connect(mapStateToProps)(Doctor)