import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './auth/Login';
import Landing from './landing/Landing';
import NotFound from './notFound';
import Dashboard from './dashboard/Dashboard';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/login' component={Login} />
    <Route path='/dashboard' component={Dashboard} />

    <Route component={NotFound} />
  </Switch>
);

export default Main;
