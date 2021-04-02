import React from 'react';
import Icon from '../assets/img/logo-cont.png';

const loading = () => (
  <div id="loader-wrapper">
    <img src={Icon} className="logo-svg" alt="icone load" />
    <div id="loader" />
    <div className="loader-section section-left" />
    <div className="loader-section section-right" />
  </div>
);

export default loading;
