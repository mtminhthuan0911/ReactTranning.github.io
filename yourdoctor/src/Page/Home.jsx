import React, { Component , PureComponent } from 'react';
import About from '../Component/About';
import Banner from '../Component/Banner';
import Doctor from '../Component/Doctor';
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import NumberCheck from '../Component/NumberCheck';
import Product from '../Component/Product';
import Reaseon from '../Component/Reaseon';
import SubmitEmail from '../Component/SubmitEmail';
import Testimonial from '../Component/Testimonial';
class Home extends Component {
    render() {
        return (
           <div className="Home">
               <Header></Header>
               <div className="container">
                   <Banner></Banner>
                   <NumberCheck></NumberCheck>       
               </div>
               <About></About>
               <Reaseon></Reaseon>
               <Product></Product>
               <Doctor></Doctor>
               <Testimonial></Testimonial>
               <SubmitEmail></SubmitEmail>
               <Footer></Footer>
           </div>
        );
    }
}

export default Home;