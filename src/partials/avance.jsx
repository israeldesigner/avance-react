/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';

const avance = () =>
//   useEffect(() => {
//     if (document.title === 'Avance contabilidade') console.log(`${document.title} é este`);
//   });

  (
    <div className="content">
      <section
        id="banner"
        className="bannerFaq bannerPage text-center d-flex
        justify-content-center align-items-center"
      >
        <h1 className="bannerPage-title"><b className="display-3">Sobre a Avance</b></h1>
      </section>
      <section className="container page aboutPage">
        <h3 className="page-title">Contabilidade ao seu alcance</h3>
        <article className="page-article">
          <p>
            Somos uma empresa contábil, composta por contadores e demais profissionais
            que adotam uma postura correta, profissional e experiente no segmento da contabilidade
            empresarial.
          </p>
          <p>
            A Avance surgiu em Dezembro de 2016 com o intuito de apresentar as melhores
            técnicas contábeis, orientando com ética e profissionalismo no âmbito contábil,
            além de conduzir as obrigações contábeis de forma ágil e eficiente. Atuamos no
            foco do cliente com as melhores soluções, responsabilidade e ética profissional.
          </p>
          <cite>
            “Buscamos ser um diferencial no mercado, oferecendo soluções contábeis consistentes para
            empresas e pessoas físicas. Nossa estrutura nos permite prestar serviços para todo e
            qualquer tipo de empresa e segmento. ” Rafael Baracho – Contador | Sócio Administrador
          </cite>
        </article>
        <h3 className="page-title">Missão, visão e valores</h3>
        <article className="page-article">
          <p>
            Apresentar as melhores técnicas contábeis, orientando com ética e profissionalismo
            no âmbito contábil, além de conduzir as obrigações de forma ágil e competente com
            excelência em atendimento e gestão. Ser um diferencial no mercado, agregando valor
            aos serviços prestados, de forma idônea, coerente e responsabilidade social.
          </p>
        </article>
      </section>
    </div>
  );
export default avance;
