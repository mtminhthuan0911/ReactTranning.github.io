import React, { Component } from 'react'

export default class SinhVien extends Component {

    // Thuộc tính Name,Class thuốc class SinhVien
    Name = 'Võ Minh Thuận';
    ClassSV = 'Frontend 1';
    NameSchool = "ABC_abc";

    renderInfoSinhVien = () =>{
        return(
        
            <ul className="dasboard-infor">
                <li className="dasboard-info-item">Name Student : {this.Name}</li>
                <li className="dasboard-info-item">Class Student : {this.ClassSV}</li>
                <li className="dasboard-info-item">Class Student : {this.NameSchool}</li>
            </ul>
      
        )
    }

    render() {

        const NameSchool = 'ABC_avc';

        return (
        <div className="dasdboard">
            {this.renderInfoSinhVien()}
        </div>
        )
    }
}
