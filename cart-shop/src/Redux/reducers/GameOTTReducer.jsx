
const stateDefault = {
    mangdatcuoc : [
        {Ma:'keo' , Img : "./Media/K3.svg",datcuoc:false},
        {Ma:'bua' , Img : "./Media/K2.svg",datcuoc:true},
        {Ma:'bao' , Img : "./Media/K1.svg",datcuoc:false}
    ],
    sobanthang : 0,
    sobanchoi : 0,
    ketqua : "You are Winner",
    computer : {Ma:'keo',Img:"./Media/k3.svg"}
}

const GameOTTReducer = (state = stateDefault, action) => {
    switch (action.type)
    {   
        case 'CHON_KEO_BUA_BAO' : {
            let mangdatcuocupdate =  [...state.mangdatcuoc];
            mangdatcuocupdate = mangdatcuocupdate.map((item,index) => {
                return {...item,datcuoc:false}
            })
            // Tìm Ra mảng đặt cược ứng với 
            let index = mangdatcuocupdate.findIndex(qc => qc.Ma === action.MaCuoc);
            if(index !== -1)
            {
                mangdatcuocupdate[index].datcuoc = true;
            }
            state.mangdatcuoc = mangdatcuocupdate;
            console.log(action)
            return {...state}
           
        }

        case 'Ran_Dom' : 
        {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let CuocNgauNhien = state.mangdatcuoc
            [soNgauNhien];
            state.computer = CuocNgauNhien;
            return {...state}
        }

        default : return {...state}
    }
}

export default GameOTTReducer;