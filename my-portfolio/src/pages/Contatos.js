import React from 'react';
import CardContato from '../components/CardContato/CardContato';

function Contatos() {
  return(
    <div className="contatos-container">
      <CardContato
        img="bi bi-linkedin"
        nome="Linkedin"
        link="https://www.linkedin.com/in/guilherme-hermenegildo-junior/"
      />
      <CardContato
        img="bi bi-github"
        nome="Github"
        link="https://github.com/guilhermehjunior"
      />
      <CardContato
        img="bi bi-whatsapp"
        nome="Whatsapp"
        link="+55(41)99251-4341"
      />
      <CardContato
        img="bi bi-envelope"
        nome="Email"
        link="guihjunior7@gmail.com"
      />
    </div>
  ); 
}

export default Contatos;