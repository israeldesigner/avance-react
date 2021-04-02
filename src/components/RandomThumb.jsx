import React from 'react';
import thumb1 from '../assets/img/thumb1.jpg';
import thumb2 from '../assets/img/thumb2.jpg';


const randomThumb = () => {
  const thumbArray = [
    thumb1,
    thumb2,
  ];

  const thumbSize = thumbArray.length;
  const x = Math.floor(thumbSize * Math.random());
  const imgPlace = thumbArray[x];

  return (
    <img className="card-img-top cardImg" src={imgPlace} alt="imagem contador" />
  );
};

export default randomThumb;
