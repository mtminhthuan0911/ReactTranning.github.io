import React, { Component } from 'react'

export default class Event extends Component {

    // Phương thức xử lí cho button onclick

    handleShowMessage = (message) => {
        alert(message);
    }


    render() {
        let message = 'Hello Minh Thuận';
        return (
            <div className="container">
                <button className="click" onClick={() => this.handleShowMessage(message)}>Click Show Message</button>
            </div>
        )
    }
}
