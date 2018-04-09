import React, { Component } from 'react';
import uuid from 'uuid';
import * as R from 'ramda';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import './navbar.css'

const ROOT = 'root'

/* Interface */
const propTypes = {
  pathname: Proptypes.string
};

/* Default props */
const defaultProps = {
  pathname: ''
};

/* Implementation */
class Navbar extends Component {
  getNavItem () {
    const { pathname } = this.props;
    const navbarArray = pathname.split('/');
    if (pathname !== '/') {
      navbarArray[0] = ROOT;

      return navbarArray;
    }
    return [ROOT];
  }

  getLink = (item) => {
    if (item === ROOT) return '/';
    const { pathname } = this.props;

    return `${pathname.substr(0, pathname.indexOf(item))}${item}`;
  }

  renderItem = (item) => {
    return (
      <li className='navbar-items' key={uuid()}>
        <Link to={this.getLink(item)}>
          {item}
        </Link>
      </li>
    );
  }

  render () {
    return (
      <nav className='navigation'>
        <ul>
          {R.map(this.renderItem, this.getNavItem())}
        </ul>
      </nav>
    );
  }
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
