import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { GlobalStyle } from './assets';

import Welcome from '../src/screens/Welcome';
import WinSide from '../src/screens/WinSide';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <WinSide />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
