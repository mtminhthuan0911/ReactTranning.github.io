import React, { Component } from 'react';
import {connect} from 'react-redux';
class KetQua extends Component {
    render() {

        

        return (
            <div>
                  <div className="content">
                            <h1 className="txtHeading">{this.props.ketqua}</h1>
                            <p className="txtThongTin">Số Bàn Thắng : ({this.props.sobanthang})</p>
                            <p className="txtThongTin">Số Bàn Chơi : ({this.props.sobanchoi})</p>
                            <button onClick ={() => this.props.playGame()} className="btn primary">Play Game</button>
                    </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        sobanthang : state.GameOTTReducer.sobanthang ,
        sobanchoi :state.GameOTTReducer.sobanchoi ,
        ketqua : state.GameOTTReducer.ketqua,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        playGame : () => {
            let count = 50;
            // khai báo hàm lập đi lập lại
            let randomComputerItem = setInterval(()=>{
                dispatch({
                    type:'Ran_Dom'
                })
                if(count > 100) {
                    // Dừng ham setInterVal
                    clearInterval(randomComputerItem)
                }
            },100)
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(KetQua);