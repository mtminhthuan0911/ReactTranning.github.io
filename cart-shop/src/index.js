import React from 'react';
import ReactDOM from 'react-dom';
import './SASS/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Setup Redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './Redux/reducers/rootReducer';

const store = createStore(rootReducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(

  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
