import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ProductItem from './Components/Product/ProductItem';
import 'bootstrap/dist/css/bootstrap.css';
import Test from './Components/Product/test';
ReactDOM.render(
  <React.StrictMode>
    <Test  />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
