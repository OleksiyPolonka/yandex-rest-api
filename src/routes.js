import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import isLoggedIn from './hocs/isLoggedIn';
import LoginPage from './containers/loginPage';
import DashboardContainer from './containers/dashboardContainer';

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route path='/login' component={LoginPage}
        />
        <Route
          path='/'
          render={({location}) => 
            isLoggedIn(location, DashboardContainer)}
        />
      </Switch>
    );
  };
}

export default Routes;
