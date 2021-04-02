
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Core/Main';

const elemento = document.getElementById('app');

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="wrapper">
    <App />
  </div>,
  elemento,
);
