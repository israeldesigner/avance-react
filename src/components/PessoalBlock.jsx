/* eslint-disable max-len */
import React from 'react';
import iconPessoal from '../assets/img/icon-pessoal.png';

const pessoalObject = {
  title: 'Pessoal',
  description: 'Executamos toda a rotina de departamento de Pessoal, inclusive com serviços de homologações em Sindicatos, Juntas de conciliação e Ministério do trabalho. Processamento e envio de informações nos diversos meios eletrônicos aos órgãos que regulam as relações do trabalho.',
  iconPessoal,
  listarticle: [
    'Admissões; Rescisões',
    'Folha de Pagamento',
    'Férias; Licenças; Afastamentos; 13º Salário',
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
