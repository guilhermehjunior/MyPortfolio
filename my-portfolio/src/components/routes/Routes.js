import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contatos from '../../pages/Contatos';

function Routes() {
  return(
    <Switch>
      <Route path="/contatos" component={ Contatos } />
    </Switch>
  );
}

export default Routes;
