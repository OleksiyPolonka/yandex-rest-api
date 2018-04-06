import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

// import './App.css';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;
