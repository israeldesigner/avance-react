/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo1 from '../assets/img/cliente-aquazero.jpg';
import Logo2 from '../assets/img/cliente-baracho.jpg';

const clientes = () =>
//   useEffect(() => {
//     if (document.title === 'Avance contabilidade') console.log(`${document.title} é este`);
//   });

  (
    <div className="content">
      <section id="banner" className="text-center bannerServicos">
        <div className="jumbotron jumbotron-fluid bgBlue mb-0">
          <div className="container">
            <h1 className="text-white"> Clientes </h1>
          </div>
        </div>
      </section>
      <section className="container page pageClient">
        <div className="row d-flex align-items-center pageClient-logos">
          <Link
            to={(location) => ({ pathname: '/clientes' })}
            className="mr-4"
          >
            <img
              className="img-fluid rounded-circle shadow"
              src={Logo1}
              alt="logo empresa aquazero"
            />
          </Link>

          <Link to={(location) => `${location.pathname}?sort=name`}>
            <img
              className="img-fluid rounded-circle shadow"
              src={Logo2}
              alt="logo baracho estetica"
            />
          </Link>
        </div>
      </section>
    </div>
  );
export default clientes;
