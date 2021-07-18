import React, { Component } from 'react'
import {connect} from 'react-redux';
class ThongTinTroChoi extends Component {

    

    render() {
        return (
            <div>   
                    <p className="Content-Game">You Select : ({this.props.taiXiu ? 'TÀI' : 'XỈU' })</p>
                    <p className="Content-Game">Result : ({this.props.sobanthang})</p>
                    <p className="Content-Game">Numer of Win : ({this.props.tongsobanchoi})</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sobanthang : state.GameXucXacReducer.sobanthang,
        taiXiu : state.GameXucXacReducer.taiXiu,
        tongsobanchoi : state.GameXucXacReducer.tongsobanchoi,
    }
}

export default connect(mapStateToProps)(ThongTinTroChoi)