import React from 'react';
import './CardProjeto.css';

function CardProjeto({ projeto }) {
  const { img, title, description, link, github } = projeto;

  return (
    <div className="card-projeto">
      <div>
        <img src={ img } alt={`Projeto ${ title }`} />
      </div>
      <div>
        <h3>{ title }</h3>
        <p>{ description }</p>
        <p><a href={ link } target="_blank" rel="noreferrer">Projeto!</a></p>
        <p><a href={ github } target="_blank" rel="noreferrer">Github!</a></p>
      </div>
    </div>
  );
}

export default CardProjeto;
