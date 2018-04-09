import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';

import './header.css'

/* Interface */
const propTypes = {
  name: Proptypes.string
};

/* Default props */
const defaultProps = {
  name: ''
};

/* Implementation */
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
      : <div className='header-container'>
          <header className='container header-container'>
            <div className='header-wrapper'>
              <h3><span>Пользователь: </span>{name}</h3>
              <button className="btn btn-primary" onClick={this.logOut}>log out</button>
            </div>
          </header>
        </div>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
