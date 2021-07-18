import React, { Component } from 'react'
import Player from './Player';
import Computer from './Computer';
import KetQua from './KetQua';

export default class OantutiReducer extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <p className="txtHeading">Game Oan Tu Ti 2021</p>
                    <div className="Block">
                        <Player></Player>
                        <KetQua></KetQua>
                       <Computer></Computer>
                    </div>
                </div>
            </div>
        )
    }
}
