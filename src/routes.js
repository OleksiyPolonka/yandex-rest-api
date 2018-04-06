import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './containers/loginPage';
import ToDoAppContainer from './containers/toDoApp';

class Routes extends Component {
  componentWillMount () {
    // localStorage.getItem('token');
  }

  render () {
    return (
      <Switch>
        <Route path='/login' component={LoginPage}/>
        <Route
          path='/'
          component={ToDoAppContainer}
          onEnter={this.onRootRouteEnter}
          onChange={this.onRootRouteChange}
        />
      </Switch>
    );
  };
}

export default Routes;
