import { BrowserRouter, Route, Switch } from "react-router-dom";
import './Assets/Reset/reset.css'
import './Assets/style.css'
import Header from "./Component/Header";
import API from "./Page/API";
import Home from "./Page/Home";
import Service from "./Page/Service";
function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/Home" component={Home}></Route>
            <Route exact path = "/Service" component={Service}></Route>
            <Route exact path = "/API" component={API}></Route>
            <Route exact path = "/" component={Home}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
