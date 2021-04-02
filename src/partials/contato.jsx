/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Grid from '../components/Grid';
import FormContato from '../panel/form';

const contato = () => {
  useEffect(() => {
  });

  return (
    <div className="content">
      <section id="banner" className="bannerFaq bannerPage bannerMulti text-center d-flex justify-content-center align-items-center">
        <h1 className="bannerPage-title"><b className="display-3">Contato</b></h1>
      </section>
      <section className="container page aboutPage">
        <div className="row">
          <Grid cols="12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3298198693024!2d-38.530854685241096!3d-3.7381229972803585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749018bdf1447%3A0x8720ba516bdc8a8e!2sRua%20Solon%20Pinheiro%2C%20873%20-%20Jos%C3%A9%20Bonifacio%2C%20Fortaleza%20-%20CE%2C%2060050-041!5e0!3m2!1spt-BR!2sbr!4v1589236501039!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              title="Mapa"
            />
          </Grid>
          <Grid cols="6">
            <h4>Contato</h4>
            <FormContato />
          </Grid>
          <div className="col-sm-6 bg-primary mt-1 p-4 text-white">
            <h4 className="colorYellow text-center">Horário de Funcionamento</h4>
            <p className="mt-4">
              Segunda à sexta: 8:00 às 18:00
              {' '}
              <br />
            </p>
            <p>
              <hr />
            </p>
            <p>
              <address>
                Rua Solon Pinheiro, 873 – Altos – Bairro José Bonifácio.
                {' '}
                <br />
                Fortaleza - CE, 60050-041
              </address>
            </p>
            <p>
              <a href="tel:+5585986973381 " className="colorYellow">(85) 98697–3381 </a>
              <br />
              <a href="mailto:contatoavance@contabilidadeavance.com.br" className="colorYellow">contato@contabilidadeavance.com.br</a>
              <br />
              <div className="justify-content-start d-flex">
                <a href="https://pt-br.facebook.com/avancecontabilidadece/" target="_blank" rel="noreferrer" className="mr-4 colorYellow">
                  <i className="fa fa-facebook fa-2x" />
                </a>
                <a href="https://www.instagram.com/contabilidadeavance" target="_blank" rel="noreferrer" className="mr-4 colorYellow">
                  <i className="fa fa-instagram fa-2x" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=85986973381" target="_blank" rel="noreferrer" className="mr-4 colorYellow">
                  <i className="fa fa-whatsapp fa-2x" />
                </a>
              </div>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default contato;
