import { ADD_SV, DEL_SV, EDIT_SV, UPDATE_SV } from "../Component/Type/SinhvienType";
import Swal from 'sweetalert2';

const initialState = {

    SinhVien : [
        { id : "1" ,User : "Vy123", TenSinhVien : "Lý Khánh Vy", Email : "vy@gmail.com" , SDT : "0776156000" , MatKhau : "123"},
        { id : "2" ,User : "Thuan123" , TenSinhVien : "Võ Minh Thuận", Email : "Thuan@gmail.com" , SDT : "0776156491" , MatKhau : "124"},
    ],

    SinhVienEdit : {id : "3" ,User : "Vy1234", TenSinhVien : "Ly", Email : "vy23@123" , SDT : "0723276156000" , MatKhau : "11123"}


}

export default (state = initialState, action) => {
    switch (action.type) {

    case ADD_SV : {
        console.log('todo', action.newsv);
        if(((action.newsv.User)&&(action.newsv.MatKhau)).trim() === '' )
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Điền Đủ Các Thông Tin Bắt Buộc',
            })
            return {...state}
        }
        
        let sinhviencapnhat = [...state.SinhVien];
        //Kiểm tra trùng 
        let index = sinhviencapnhat.findIndex(sv => sv.User === action.newsv.User);
        if(index !== -1) 
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tài Khoản đã tồn tại',
            })
           return {...state}
        }else{
            sinhviencapnhat.push(action.newsv);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Tài khoản Đã Được Thêm',
                showConfirmButton: true,
                confirmButtonColor: '#0099ff'
              })
        }
        state.SinhVien = sinhviencapnhat;
        return{...state};
    }

    case DEL_SV : {
        let sinhviencapnhat = [...state.SinhVien];
        sinhviencapnhat = sinhviencapnhat.filter(sv => sv.id !== action.svid);
        return {...state,SinhVien : sinhviencapnhat};
    }

    case EDIT_SV : {
        console.log('todo',action.sv)
       return {...state,SinhVienEdit : action.sv}
    }

    case UPDATE_SV : {
        state.SinhVienEdit = {...state.SinhVienEdit,User : action.TaiKhoan}
        state.SinhVienEdit = {...state.SinhVienEdit,TenSinhVien : action.HoTen}
        state.SinhVienEdit = {...state.SinhVienEdit,Email : action.Email}
        state.SinhVienEdit = {...state.SinhVienEdit,SDT : action.SDT}
        state.SinhVienEdit = {...state.SinhVienEdit,MatKhau : action.MatKhau}
        
       
        
        let sinhviencapnhat = [...state.SinhVien];
        let index = sinhviencapnhat.findIndex(sinhvien => sinhvien.id === state.SinhVienEdit.id)
        if(index !== -1)
        {
            sinhviencapnhat[index] = state.SinhVienEdit;
        }
        state.SinhVien =   sinhviencapnhat;
        state.SinhVienEdit = {id : -1 , User : '' ,TenSinhVien : '', Email : '' ,SDT : '',  MatKhau : '' }
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Cập Nhật Thành Công',
            showConfirmButton: true,
            confirmButtonColor: '#0099ff'
          })
        return {...state}
    }


    default:
        return state
    }
}
