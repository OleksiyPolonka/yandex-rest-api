import React, { Component } from 'react';
import uuid from 'uuid';
import * as R from 'ramda';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import './navbar.css'

const ROOT = 'root'

/* Interface */
const propTypes = {
  hash: Proptypes.string,
  pathname: Proptypes.string
};

/* Default props */
const defaultProps = {
  hash: '',
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

  getLink = (item, index, items) => {
    if (!index) return '/';

    return `/${R.join('/', R.slice(1, R.inc(index), items))}`;
  }

  renderItem = (item, index, items) => {
    return (
      <li className='navbar-items' key={uuid()}>
        <Link to={this.getLink(item, index, items)}>
          {item}
        </Link>
      </li>
    );
  }

  mapIndexed = () => {
    return R.addIndex(R.map)
  }

  render () {
    return (
      <nav className='navigation'>
        <ul>
          {this.mapIndexed()(this.renderItem, this.getNavItem())}
        </ul>
      </nav>
    );
  }
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
