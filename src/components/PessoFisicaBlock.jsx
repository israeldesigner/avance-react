/* eslint-disable max-len */
import React from 'react';
import iconPessoal from '../assets/img/icon-pessoal2.png';

const pessoalObject = {
  title: 'Pessoa física',
  description: '',
  iconPessoal,
  listarticle: [
    'Imposto de Renda',
    'Ganhos de Capital',
    'Carnê Leão',
    'FGTS',
    'INSS',
    'Jornada de Trabalho ',
    'Esocial',
  ],
};
const pessoalTitle = () => (
  <h1 className="text-white">
    {pessoalObject.title}
  </h1>
);

const pessoalIcon = (props) => {
  const altProps = props;
  return (
    <div className="bannerServicos-img">
      <img src={pessoalObject.iconPessoal} alt={altProps} />
    </div>
  );
};

const pessoalDescription = () => (
  <h2 className="page-title">
    {pessoalObject.description}
  </h2>
);

const pessoalList = () => (
  <article className="page-article">
    <ul>
      {pessoalObject.listarticle.map((item) => (
        <li key={item}>
          {item}
        </li>
      ))}
    </ul>
  </article>
);

export {
  pessoalTitle, pessoalIcon, pessoalDescription, pessoalList,
};

export default pessoalTitle;
