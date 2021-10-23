import React from 'react';
import PropTypes from 'prop-types';
import './CardContato.css';

function CardContato({img, nome, link}) {
  return (
    <div className="card-contato">
      <i className={img}/>
      <h3>{nome}</h3>
      <p>{link}</p>
    </div>
  );
}

CardContato.propTypes = {
  img: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardContato;
