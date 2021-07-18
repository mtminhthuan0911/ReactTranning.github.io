import React, { Component } from 'react'

export default class DemoPure extends Component {


    state = {
        like : 0
    }


    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <p className="txtHeading">
                        Demo Pure
                    </p>
                </div>
            </div>
        )
    }
}
