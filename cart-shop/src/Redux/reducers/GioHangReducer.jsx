const stateGioHang = {
    gioHang : [
        {
            "MASP": 1,
            "Img" : "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            "TenSP":"MacbookPro 2016",
            "CPU" : "Intel",
            "Price": 2000,
            "SoLuong":1
        }
    ]
}

export const GioHangReducer = ( state = stateGioHang , action) => {
   
    switch(action.type)
    {
        case 'Add_To_Cart' :
        {
            // Xử lý thêm giỏ hàng
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.MASP === action.spGioHang.MASP);
            if(index !== -1)
            {
                gioHangCapNhat[index].SoLuong +=1 ;
            }else{
                gioHangCapNhat.push(action.spGioHang);
            }
            state.gioHang = gioHangCapNhat;
            return {...state};
        }

        case 'Xoa_Gio_Hang' :
            {
                let gioHangCapNhat = [...state.gioHang];
                let index = gioHangCapNhat.findIndex(sp => sp.MASP === action.MASP);
                if(index !== 1) {
                        gioHangCapNhat.splice(index,1);
                }
                // var gioHangCapNhat = [...state.gioHang].filter(spGH => spGH.MASP !== action.MASP)
                state.gioHang = gioHangCapNhat;
                return {...state};
            }

        case 'Tang_Giam_So_Luong' :
                {   
                    const {index,tanggiam} = action;
                    console.log(action)
                    let giohangcapnhat = [...state.gioHang];
                    if(tanggiam)
                    {
                        giohangcapnhat[index].SoLuong += 1;
                    }else
                    {
                       if(giohangcapnhat[index].SoLuong > 1 )
                       {
                        giohangcapnhat[index].SoLuong -= 1;  
                       }
                       else{
                           alert('Giỏ Hàng Phải lớn hoặc bằng 1')
                       }
                    }
                    state.gioHang = giohangcapnhat;
                    return {...state}
                }
    }
    return {...state }
}
