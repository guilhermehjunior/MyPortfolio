import React from 'react';
import PropTypes from 'prop-types';
import './CardContato.css';

function CardContato({img, nome, ref}) {
  return (
    <div className="card-contato">
      <img src={img} />
      <h3>{nome}</h3>
      <p>{ref}</p>
    </div>
  );
}

CardContato.propTypes = {
  img: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  ref: PropTypes.string.isRequired,
};

export default CardContato;
