import React, { Component } from 'react';
import Spinner from '../../components/spinner';

import './login.css';

class LoginPage extends Component {
  constructor (...args) {
    super(...args);
    this.state = {
      isLoading: false
    };
  }
  getTocken = () => {
    // TODO move url to const folder
    this.setState({isLoading: true});

    fetch('https://oauth.yandex.ru/authorize?response_type=token&client_id=7e3526c3f2704086887ed8eb3bee84cd')
      .then(res => window.location = res.url)
      .catch(err => this.setState({isLoading: false}));
  }
  render () {
    return (
      this.state.isLoading
      ? <Spinner />
      : <div className='login-container'>
          <button className='btn btn-primary' onClick={this.getTocken}>
            Get Token
          </button>
        </div>
    );
  }
}

export default LoginPage
