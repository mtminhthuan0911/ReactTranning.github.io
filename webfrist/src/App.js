import './SASS/App.scss'
import Product from './components/Product';
import SinhVien from './Databinding/SinhVien.jsx';
import Event from './Databinding/Event';
import DemoIF from './IFElse_Control/DemoIF';



function App() {
  return (
    <div className="App">
        <Product></Product>
        {/* <SinhVien></SinhVien> */}
        <Event></Event>
        <DemoIF></DemoIF>
    </div>
  );
}

export default App;
