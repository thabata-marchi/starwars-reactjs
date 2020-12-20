import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { GlobalStyles } from './assets/global-styles';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
