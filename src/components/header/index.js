import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './header.css'

class Header extends Component {
  constructor (...args) {
    super(...args);
    this.state = {
      redirect: false
    };
  }
  logOut = () => {
    window.localStorage.removeItem('token');
    this.setState({redirect: true})
  }
  render () {
    const {name} = this.props;
    const {redirect} = this.state;

    return (
      redirect
      ? <Redirect to={'/login'} />
      : <header className='container'>
          <div className='wrapper'>
            <h3>{name}</h3>
            <button className="btn btn-default" onClick={this.logOut}>log out</button>
          </div>
        </header>
    );
  }
}

export default Header;
