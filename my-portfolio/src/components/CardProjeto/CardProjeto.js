import React from 'react';

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
        <a href={ link } target="_blank">Projeto!</a>
        <a href={ github } target="_blank">Github!</a>
      </div>
    </div>
  );
}

export default CardProjeto;
