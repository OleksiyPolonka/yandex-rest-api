import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import ToDoAppContainer from './containers/toDoApp';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <ToDoAppContainer />
      </Provider>
    );
  }
}


export default App;
