import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES, BASE_APP_PATH } from './Utils/Constants';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

const Routes = () => {
  return (
    <BrowserRouter basename={BASE_APP_PATH}>
      <Switch>
        <Redirect exact from="/" to={ROUTES.HOME} />
        <Route exact={true} path={ROUTES.HOME} component={Home} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;



