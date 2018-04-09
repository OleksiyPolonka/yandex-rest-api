import React, { Component } from 'react';
import Spinner from '../../components/spinner';

import { BASE_AUTH_URL, RESPONSE_TYPE, CLIENT_ID } from '../../constants/common';

import './login.css';

class LoginPage extends Component {
  constructor (...args) {
    super(...args);
    this.state = {
      isLoading: false
    };
  }
  getTocken = () => {
    this.setState({isLoading: true});

    fetch(`${BASE_AUTH_URL}?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}`)
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
