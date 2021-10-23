import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../pages/About';
import Contatos from '../pages/Contatos';
import Curriculo from '../pages/Curriculo';
import Habilidades from '../pages/Habilidades';
import Projetos from '../pages/Projetos';

function Routes() {
  return(
    <Switch>
      <Route path="/contatos" component={ Contatos } />
      <Route path="/about" component={ About } />
      <Route path="/curriculo" component={ Curriculo } />
      <Route path="/Habilidades" component={ Habilidades } />
      <Route path="/Projetos" component={ Projetos }/>
    </Switch>
  );
}

export default Routes;
