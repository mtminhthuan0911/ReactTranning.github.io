import React, { Component } from 'react';
import {connect} from "react-redux"

class Player extends Component {
    render() {
        return (
            <div>
                <div className="Mine">
                                <div className="thethink">
                                    <img src={this.props.mangdatcuoc.find(item => item.datcuoc === true).Img} alt="" />
                                </div>
                                <img className="ava" src="./Media/ava.jpg" alt="" />
                                <div className="keobuabao">
                                    {this.props.mangdatcuoc.map((item,index)=> {

                                        let border = {}
                                        if(item.datcuoc)
                                        {
                                            border = {border : '4px solid red'}
                                        }
                                        
                                        return <img onClick={()=> this.props.datcuoc(item.Ma)}  style ={border} className="select" src= {item.Img} alt="" />
                                    })}                                 
                                </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        mangdatcuoc : state.GameOTTReducer.mangdatcuoc,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datcuoc : (MaCuoc) => {
            dispatch ({
                type : 'CHON_KEO_BUA_BAO',
                MaCuoc
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);