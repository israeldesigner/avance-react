/* eslint-disable max-len */
import React from 'react';
import iconRegistro from '../assets/img/icon-debito.png';

const registroObject = {
  title: 'Contábil',
  description: 'Execução de toda a rotina Contábil, em conformidade com as normas e princípios contábeis, determinações do CFC, CRC, estabelecidos pela legislação nas esferas Municipal, Estadual e Federal.',
  iconRegistro,
  listarticle: [
    'Contabilização de Documentos',
    'Balanço Patrimonial',
    'DRE - Demonstrativo de resultados do exercíciosl',
    'Fluxo de Caixa',
    'Apuração e controle do Lucro Real e Lucro Presumido',
    'Plano de Contas',
    'SPED Contábil',
    'Aplicação de norma internacional de contabilidade (IFRS)',
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

const linkWhats = () => (
  <a href="https://api.whatsapp.com/send?phone=5585986973381" target="_blank" rel="noreferrer" className="btn buttonGreen btn-block btnWhats">
    Solicitar orçamento
  </a>
);

export {
  registroTitle, registroIcon, registroDescription, registroList, linkWhats,
};

export default registroTitle;
