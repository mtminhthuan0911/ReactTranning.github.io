import {ADD_SV , DEL_SV , EDIT_SV , UPDATE_SV} from '../Type/SinhvienType'


export const ADDSV = (newsv) => ({
    type: ADD_SV,
    newsv
})

export const DELSV = (svid) => ({
    type: DEL_SV,
    svid
})

export const EDIT = (sv) => ({
    type: EDIT_SV,
    sv
})

export const Update = (TaiKhoan,HoTen,SDT,Email,MatKhau) => ({
    type: UPDATE_SV,
    TaiKhoan,HoTen,MatKhau,SDT,Email,
})
