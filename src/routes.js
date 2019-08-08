
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { User, Repository } from './Pages';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={User} />
      <Route path="/repos/:name" component={Repository} />
    </Switch>
  </BrowserRouter>
);