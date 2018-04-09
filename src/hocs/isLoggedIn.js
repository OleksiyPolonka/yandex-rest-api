import React from 'react';

import { Redirect } from 'react-router-dom';

const isLoggedIn = (location, Component) => {
  const isLogged = () => {
    const token = window.localStorage.getItem('token');
    const [, newToken] = location.hash.match(/\#(?:access_token)\=([\S\s]*?)\&/) || [];

    if (token) {
      return true;
    }
    if (!token && newToken) {
      window.localStorage.setItem('token', newToken)

      return true
    }
    return false
  };

  return isLogged()
    ? <Component />
    : <Redirect to='/login' />
};

export default isLoggedIn;
