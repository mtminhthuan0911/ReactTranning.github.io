import './SASS/Reset/reset.css';
import './SASS/Index/App.css';
import Product from './components/Product';
import Event from './Databinding/Event';
import DemoIF from './IFElse_Control/DemoIF';
import State from './BaiTap_State/State';
import BaiTapVongLap from './BaiTapVongLap/BaiTapVongLap';
import FetchJson from './BaiTap_FetchJson/FetchJson';
import Props from './BaiTap_Props/Props';
import Laptop from './BaiTap_Props/Laptop';









function App() {
  return (
    <div className="App">
        <Product></Product>
        <Event></Event>
        <DemoIF></DemoIF>
        <State></State>
        <BaiTapVongLap></BaiTapVongLap>
        <FetchJson></FetchJson>
        <Props></Props>
        <Laptop></Laptop>
    </div>
  );
}

export default App;
