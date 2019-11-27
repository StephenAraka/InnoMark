import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './auth/Login';
import Register from './auth/Register';
import Landing from './landing/Landing';
import NotFound from './notFound';
import Dashboard from './dashboard/Dashboard';

const Main = () => (
  <Switch>
    <Route exact path='/innomark' component={Landing} />
    <Route path='/innomark/login' component={Login} />
    <Route path='/innomark/register' component={Register} />
    <Route path='/innomark/dashboard' component={Dashboard} />
    

    <Route component={NotFound} />
  </Switch>
);

export default Main;
