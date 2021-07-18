import { combineReducers } from "redux";
import GameXucXacReducer from "./GameXucXacReducer";
import { GioHangReducer } from "./GioHangReducer";
import GameOTTReducer from './GameOTTReducer';



// Tạo 1 store tổng cho app 

export const rootReducer = combineReducers({
    // Đây là nơi sẽ chứa các reducers cho nghiệp vụ (store con )
    GioHangReducer : GioHangReducer,
    GameXucXacReducer : GameXucXacReducer,
     // State của GameXucXacReducer
    GameOTTReducer //State Game Oản tù tì
   
})