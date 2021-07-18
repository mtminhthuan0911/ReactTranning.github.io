import logo from './logo.svg';
import './SASS/style.css';
import CartShop from './CartShop/CartShop';
import DanhSachSP from './CartShop/DanhSachSP';
import CartGiay from './CartShopGiay/CartGiay';
import BTGioHangRedux from './BaiTapRedux/BTGioHangRedux';
import GameXucXac from './GameRedux/GameXucXac';
import OantutiReducer from './GameOantutiRedux/OantutiReducer.jsx'
import DatVePhimReducer from './DatVePhim/DatVePhimReducer';
import DemoPure from './DemoPureComponent/DemoPure';
import UserProfile from './FormValidation/UserProfile/UserProfile';
import SignProfile from './FormValidation/UserProfile/SignProfile';
import Header from './FormValidation/UserProfile/Header';

function App() {
  return (
    <div className="App">
        {/* <CartShop></CartShop>
        <CartGiay></CartGiay> */}
        {/* <BTGioHangRedux></BTGioHangRedux> */}
        {/* <GameXucXac></GameXucXac> */}
        {/* <OantutiReducer></OantutiReducer> */}
        {/* <DatVePhimReducer></DatVePhimReducer> */}
        <Header></Header>
    </div>
  );
}

export default App;
