import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from './containers/loginPage';
import DashboardContainer from './containers/dashboardContainer';

class Routes extends Component {
  isLogedIn (props) {
    const token = localStorage.getItem('token');
    const [, newToken] = props.location.hash.match(/\#(?:access_token)\=([\S\s]*?)\&/) || [];

    if (token) {
      return true;
    }
    if (!token && newToken) {
      localStorage.setItem('token', newToken)

      return true
    }
    return false
  }
  render () {
    return (
      <Switch>
        <Route path='/login' component={LoginPage}
        />
        <Route
          path='/'
          render={props => (
            this.isLogedIn(props)
             ? (<DashboardContainer />)
             : (<Redirect to='/login' />)
          )}
        />
      </Switch>
    );
  };
}

export default Routes;
