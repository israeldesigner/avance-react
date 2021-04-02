/* eslint-disable max-len */
import React from 'react';
import iconRegistro from '../assets/img/icon-debito.png';

const registroObject = {
  title: 'Consultoria e auditoria',
  description: 'Implantação e orientação na gestão empresarial com técnicas e informações consistentes para a tomada de decisões, Gestão do patrimônio e maximização dos resultados.',
  iconRegistro,
  listarticle: [
    'Avaliação e viabilidades de negócios',
    'Gestão e Reestruturação',
    'Planejamento Tributário',
    'Inventário | Estoque | Custos Pró-Labore',
    'Gestão de Riscos ',
    'Auditoria Interna',
    'Processos e Procedimentos Internos',
  ],
};
const registroTitle = () => (
  <h1 className="text-white">
    {registroObject.title}
  </h1>
);

const registroIcon = (props) => {
  const altProps = props;
  return (
    <div className="bannerServicos-img">
      <img src={registroObject.iconRegistro} alt={altProps} />
    </div>
  );
};

const registroDescription = () => (
  <h2 className="page-title">
    {registroObject.description}
  </h2>
);

const registroList = () => (
  <article className="page-article">
    <ul>
      {registroObject.listarticle.map((item) => (
        <li key={item}>
          {item}
        </li>
      ))}
    </ul>
  </article>
);

export {
  registroTitle, registroIcon, registroDescription, registroList,
};

export default registroTitle;
