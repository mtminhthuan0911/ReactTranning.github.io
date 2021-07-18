import React, { Component } from 'react';
import {connect} from 'react-redux';
class XucXac extends Component {

    renderXucXac = () => {
        return this.props.mangxucxac.map((xucxac,index) => {
            return <img key= {index} src= {xucxac.XucXac} alt="" srcset="" />
        })
    }

    render() {
        return (
            <div className="Block">
                {/* <img src="./Media/Frame 6.svg" alt="Frame6" className="xucxac" />
                <img src="./Media/Frame 7.svg" alt="Frame6" className="xucxac" />
                <img src="./Media/Frame 8.svg" alt="Frame6" className="xucxac" /> */}
                {this.renderXucXac()}
            </div>
        );
    }
}

// Hàm Lấy State từu redux về thành biến của component

const mapStateToProps = state => {
    return {
        mangxucxac : state.GameXucXacReducer.mangxucxac
    }
}

export default connect(mapStateToProps)(XucXac);