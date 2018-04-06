import React, { Component } from 'react';

class LoginPage extends Component {
  getTocken () {
    fetch('https://oauth.yandex.ru/authorize?response_type=token&client_id=7e3526c3f2704086887ed8eb3bee84cd')
      .then(res => window.location = res.url);
  }
  render () {
    return (
      <div>
        <button onClick={this.getTocken}>
          Get Token
        </button>
      </div>
    );
  }
}

export default LoginPage
