import React, { Component } from 'react';
import {connect} from 'react-redux'

class Computer extends Component {
    render() {
        let keyframe = `@keyframe randomItems${Date.now()} {
            from {
                top : 0px;
            }
            to{
                top : 200px;
            }
        }`
        return (
            <div>
                <style>
                    {keyframe}
                </style>
                 <div className="Computer">
                                <div className="thethink">
                                    <img style={{animation : `randomItems${Date.now()}0,1s`}} className="select" src= {this.props.computer.Img} alt="" />
                                </div>
                                <img className="ava" src="./Media/Thuan.jpg" alt="" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        computer : state.GameOTTReducer.computer
    }
}




export default connect(mapStateToProps)(Computer);