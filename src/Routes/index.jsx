import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" element={ <LoginPage /> } />
  </Switch>
);

export default Routes;
