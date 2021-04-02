/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import Home from '../partials/home';
import Avance from '../partials/avance';
import Clientes from '../partials/clientes';
import Sites from '../partials/sites';
import Registro from '../partials/registro';
import Pessoal from '../partials/pessoal';
import PessoaFisica from '../partials/pessoaFisica';
import Fiscal from '../partials/fiscal';
import Consultoria from '../partials/consultoria';
import Contabil from '../partials/contabil';
import Contato from '../partials/contato';
import Form from '../components/form';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/avance" component={Avance} />
    <Route path="/clientes" component={Clientes} />
    <Route path="/sites" component={Sites} />
    <Route path="/registro" component={Registro} />
    <Route path="/pessoal" component={Pessoal} />
    <Route path="/fiscal" component={Fiscal} />
    <Route path="/consultoria" component={Consultoria} />
    <Route path="/contabil" component={Contabil} />
    <Route path="/pessoa-fisica" component={PessoaFisica} />
    <Route path="/contato" component={Contato} />
    <Redirect from="*" to="/" />
  </Switch>
);
