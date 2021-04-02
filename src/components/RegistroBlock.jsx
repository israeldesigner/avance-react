/* eslint-disable max-len */
import React from 'react';
import iconRegistro from '../assets/img/icon-escrituracao.png';

const registroObject = {
  title: 'Registro',
  description: 'Elaboração e encaminhamento de todo o processo de registro, alterações e regularizações de empresas',
  iconRegistro,
  listarticle: [
    'JUCEC - Junta comercia',
    'SEFIN - Secretaria de finanças',
    'SEUMA - Secretaria de meio ambiente',
    'Contrato Social e Aditivos',
    'Alvará de Funcionamento',
    'Licença Sanitária',
    'Licença Ambiental',
    'Normas de Segurança',
    'Certificação Digital',
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
