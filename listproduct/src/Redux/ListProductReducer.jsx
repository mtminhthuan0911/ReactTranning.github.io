import { Add_To_Cart , Tang_Giam_So_Luong , Xoa_San_Pham   } from "../Component/Type/type"
import Swal from 'sweetalert2'
import { Xoa } from "../Component/Action/action"


const initialState = {

    gioHang : [
        {
            "Masp":"1",
            "Name": "Nike F1",
            "Img" : "https://images.unsplash.com/photo-1596568359553-a56de6970068?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80",
            "Price" : 4000,
            "SoLuong":1
        }
    ]

}

export default (state = initialState, action) => {
    switch (action.type) {

    case Add_To_Cart : {
        console.log('ac',action)
        let gioHangCapNhat = [...state.gioHang];
        let index = gioHangCapNhat.findIndex(spgh => spgh.Masp === action.spGioHang.Masp);
        if(index !== -1) 
        {
            gioHangCapNhat[index].SoLuong +=1 ;
        }else{
            gioHangCapNhat.push(action.spGioHang);
        }

        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your Product has been saved',
            showConfirmButton: false,
            timer: 1500
          })

        return {...state, gioHang : gioHangCapNhat}
    }


    case Tang_Giam_So_Luong : {
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
                Swal.fire({
                    icon: 'error',
                    title: 'Product must be larger than 1 ',
                  })
               }
            }
            state.gioHang = giohangcapnhat;
            return {...state}
        }
    }

    case Xoa_San_Pham : {
           
        let gioHangCapNhat = [...state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.Masp === action.Masp);
        if(index !== 1) {
                gioHangCapNhat.splice(index,1);
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                  })
        }

        
        // var gioHangCapNhat = [...state.gioHang].filter(spGH => spGH.MASP !== action.MASP)
        return {...state, gioHang : gioHangCapNhat};
       
    }
         

    default:
        return state
    }
}
