/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
  <section id="banner" className="bannerIndex bannerPage">
    <div className="text-center d-flex justify-content-center align-items-center bannerIndex-central">
      <div id="carouselExampleControls" className="carousel slide carouselInitial">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h3 className="bannerPage-title">
              <b className="display-3">Inovação com credibilidade </b>
            </h3>
            <Link className="btn btn-info btn-lg" to={(location) => ({ pathname: '/avance' })}>
              Saiba mais
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default home;
