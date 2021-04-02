
import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './Route';

import '../assets';
import ResetStyle from '../assets/stylesJs/resetStyles';

import Loading from '../components/loading';
import Bar from '../components/Bar';
import Header from '../components/Header';

import '../../node_modules/jquery/dist/jquery';
import '../scripts/script';

export default () => (
  <HashRouter>
    <ResetStyle />
    <Loading />
    <Bar />
    <Header />
    <Routes />
  </HashRouter>
);
