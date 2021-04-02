/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LogoCont from '../assets/img/logo-cont.png';
import ListSites from '../components/ListSites';
import Grid from '../components/Grid';

const sites = () =>
//   useEffect(() => {
//     if (document.title === 'Avance contabilidade') console.log(`${document.title} é este`);
//   });

  (
    <div className="content">
      <section id="banner" className="text-center bannerServicos">
        <div className="jumbotron jumbotron-fluid bgBlue mb-0">
          <div className="container">
            <div className="bannerServicos-img">
              <img src={LogoCont} alt="setor de registro contábil" />
            </div>
            <h1 className="text-white"> Sites úteis </h1>
          </div>
        </div>
      </section>
      <section className="container page aboutPage">
        <div className="row align-items-center">
          {ListSites.map((item) => (
            <Grid cols="6 3" key={item.id}>
              <div className="card p-2">
                <a href={item.link} rel="noreferrer" target="_blank" className="">
                  <img className="card-img-top" src={`${item.img}`} alt={`logomarca ${item.title}`} />
                </a>
              </div>
            </Grid>
          ))}
        </div>
      </section>
    </div>
  );
export default sites;
