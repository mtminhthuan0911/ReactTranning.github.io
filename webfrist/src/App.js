import './SASS/Reset/reset.css';
import './SASS/Index/App.css';
import Product from './components/Product';
import SinhVien from './Databinding/SinhVien.jsx';
import Event from './Databinding/Event';
import DemoIF from './IFElse_Control/DemoIF';
import State from './BaiTap_State/State';
import BaiTapVongLap from './BaiTapVongLap/BaiTapVongLap';
import FetchJson from './BaiTap_FetchJson/FetchJson';





function App() {
  return (
    <div className="App">
        {/* <Product></Product>
        <Event></Event>
        <DemoIF></DemoIF> */}
        <State></State>
        <BaiTapVongLap></BaiTapVongLap>
        <FetchJson></FetchJson>
    </div>
  );
}

export default App;
