import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

 class Product extends Component {

    renderSP = () => {
        return this.props.SanPham.map((sp, index) => {
            return(
            <SplideSlide>
                <div key={index} className="ListProduct-Card">
                    <img data-splide-lazy="path-to-the-image" src= {sp.Img} alt="" />
                    <p className="ListProduct-Card-Name">{sp.Name}</p>
                    <p className="ListProduct-Card-Desc">{sp.Desc}</p>
                    <p className="ListProduct-Card-Price">{(sp.Price).toLocaleString()} $</p>
                    <button className="btn primary">Add To Cart</button>
                </div>
            </SplideSlide>
            )
            
        })
    }


    render() {
        return (
            <div className="container">
                <p className="txtheader">
                     - What we Serve - 
                </p>
                <p className="txtHead">
                    <span>Our</span> Services
                </p>
               <Splide options={ {
					rewind : true,
					perPage: 3,
					perMove: 2,
					gap    : '1rem',
                    autoplay : true,
                    interval : 4000,
                    lazyLoad : true,
                    pagination: false,
				} }
				onMoved={ ( splide, newIndex ) => { console.log( 'moved', newIndex ) } }>
                   {this.renderSP()}
               </Splide>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        SanPham : state.ProductReducer.SanPham
    }
}


export default connect(mapStateToProps)(Product)