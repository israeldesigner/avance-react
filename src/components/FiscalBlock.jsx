/* eslint-disable max-len */
import React from 'react';
import iconRegistro from '../assets/img/icon-conciliacao.png';

const registroObject = {
  title: 'Fiscal',
  description: 'Execução de toda a rotina Fiscal, em conformidade com as normas e princípios contábeis, determinações do CFC, CRC, estabelecidos pela legislação nas esferas Municipal, Estadual e Federal.',
  iconRegistro,
  listarticle: [
    'Escrituração Fiscal',
    'EFD; ECD; DCTF; DASN; DEFIS; DIRF',
    'Simples Nacional',
    'NF',
    'Tributos (IRPJ, ICMS, PIS, COFINS, IPI, ISS)',
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
