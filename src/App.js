import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {createStore, combineReducers, applyMiddleware} from 'redux';

const action = () => ({type: 'test'});

function reducer (state, {type}) {
  switch(type) {
    case 'test': 
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer, ['Test']);

console.log('store.getState(): ', store);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
