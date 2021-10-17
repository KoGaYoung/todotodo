import React from 'react';
import ReactDOM from 'react-dom';
import TODOTODO from "./components/TODOTODO";
// import {TODOTODO} from './src/components';
// import reportWebVitals from './compoents/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TODOTODO />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
