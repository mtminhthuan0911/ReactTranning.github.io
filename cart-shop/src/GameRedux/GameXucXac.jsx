import React, { Component } from 'react';
import XucXac from './XucXac';
import ThongTinTroChoi from './ThongTinTroChoi';
import {connect} from 'react-redux'
class GameXucXac extends Component {
    render() {
        return (
           <div className="wrapper">
               <div className="container">
                   <h1 className="txtHeading">Game Xuc Xac ( Redux ) </h1>
                   <div className="Block13">
                       <XucXac></XucXac>
                   </div>
                   <div className="Block">
                        <div className="Block-TaiXiu">
                            <button onClick= {()=>{this.props.datcuoc(true)}} className="btn size">TÀI</button>
                        </div>
                        <div className="Block-TaiXiu">
                            <button onClick= {()=> {this.props.datcuoc(false)}} className="btn size">XỈU</button>
                        </div>
                   </div>
                   <div className="Content">
                        <button onClick = {()=> this.props.playGame()}  className="btn primary">Play Game</button>
                       <ThongTinTroChoi></ThongTinTroChoi>
                   </div>
               </div>
           </div>
        );
    }
}

const mapDispatchToProps =  (dispatch) => {
    return {
        datcuoc : (taiXiu) => {
            // Tạo action tài xỉu
           let action = {
               type : 'DAT_CUOC',
               taiXiu
           }
           dispatch(action)
        },
        playGame : () =>{
            // Gửi dữ liệu type play_game lên reducer
            let action = {
                type : 'Clicked_PlayGame'
            }
            dispatch(action)
        }
    }
}


export default connect(null,mapDispatchToProps)(GameXucXac);