const stateDefault = {
    // True là tài , false là xỉu 
    // Tài ( 3 > 11 ) , Xỉu (  > 12   )
    taiXiu : true,
    mangxucxac: [
        {Ma : 6 , XucXac:'./Media/6.svg'},
        {Ma : 6 , XucXac:'./Media/6.svg'},
        {Ma : 6 , XucXac:'./Media/6.svg'}
    ],
    sobanthang : 0,
    tongsobanchoi:0
} 

const GameXucXacReducer = (state = stateDefault, action) => {
    
    switch(action.type)
    {   
        case  'DAT_CUOC' : 
            state.taiXiu = action.taiXiu;
            return {...state}
           

        case  'Clicked_PlayGame' : {
            // Bước 1 xử lý random xúc xắc
            let randommangxucxac = [];
            for(let i = 0 ; i < 3 ; i++)
            {
                // Mỗi lần lập random ngẫu nhiên từ 1 tới 6 
                let songaunhien = Math.floor(Math.random() *6) + 1;
                // Tạo ra xúc xắc từ số ngẫu nhiên : 
                let xucxacngaunhien = {Ma : songaunhien , XucXac:`./Media/${songaunhien}.svg` };
                // push vào mảng xúc xắc
                randommangxucxac.push(xucxacngaunhien)
                // Tổng giá trị số xuc xac : 
                
            }
            // Gán mangxucxac render lại giao diện 
            state.mangxucxac = randommangxucxac;
            // Render tăng tổng sô bàn chơi 
            state.tongsobanchoi +=1;
            // Render kết quả thắng : 
            let giatrixucxac = randommangxucxac.reduce((tongDiem,xucxac,index)=>{
                return tongDiem += xucxac.Ma;
            },0);
            if((giatrixucxac > 11 && state.taiXiu === true )||(giatrixucxac<=11 && state.taiXiu === false)){
                    state.sobanthang +=1
            }
            return {...state};
        }
            default:return{...state}
        
    }
}

export default GameXucXacReducer;