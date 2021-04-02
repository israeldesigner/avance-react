import React from 'react';
import Grid from '../components/Grid';
import RandomThumb from '../components/RandomThumb';
import RegistroTitle, {
  registroIcon as IconService,
  registroDescription as DescriptionService,
  registroList as ListService,
} from '../components/ConsultoriaBlock';

const services = () => (
  <div className="content">
    <section id="banner" className="text-center bannerServicos">
      <div className="jumbotron jumbotron-fluid bgBlue mb-0">
        <div className="container">
          <div className="bannerServicos-img">
            <IconService props="ícone setor de registro" />
          </div>
          <RegistroTitle />
        </div>
      </div>
    </section>
    <section className="container page servicePage">
      <div className="row">
        <Grid cols="12">
          <DescriptionService />
        </Grid>
        <Grid cols="12 7">
          <article className="page-article">
            <ListService />
          </article>
        </Grid>
        <Grid cols="12 5">
          <div className="card">
            <RandomThumb />
            <div className="card-body px-0">
              <a href="https://api.whatsapp.com/send?phone=5585986973381" target="_blank" rel="noreferrer" className="btn buttonGreen btn-block btnWhats">
                Solicitar orçamento
              </a>
            </div>
          </div>
        </Grid>
      </div>
    </section>
  </div>
);

export default services;
