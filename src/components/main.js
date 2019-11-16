import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './landing/Landing';
import NotFound from './notFound';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Landing} />

    <Route component={NotFound} />
  </Switch>
);

export default Main;
