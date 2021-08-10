import React, { Component } from 'react'
import Covid from '../Component/Covid'
import Header from '../Component/Header'
import Product from '../Component/Product'

export default class API extends Component {
    render() {
        return (
            <div className="AP">
                 <Header></Header>
               <div className="container">
                  <p className="txtHeading">Daily Viet Nam Covid</p>
                  <Covid></Covid>
               </div>
           </div>
        )
    }
}
