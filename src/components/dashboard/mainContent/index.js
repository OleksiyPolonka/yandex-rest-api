import React, { Component } from 'react';
import uuid from 'uuid';
import * as R from 'ramda';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import File from '../file'
import Spinner from '../../spinner';

import '../dashboard.css';

/* Interface */
const propTypes = {
  data: Proptypes.object,
  loading: Proptypes.bool,
  pathname: Proptypes.string
};

/* Default props */
const defaultProps = {
  data: {},
  pathname: '',
  loading: false
};

/* Implementation */
class MainContent extends Component {
  getItems () {
    return R.path(
      ['_embedded', 'items'],
      this.props.data
    );
  }

  renderContent = item => {
    const [, pathname] = item.path.split('disk:')

    return (
      <div
        key={uuid()}
        className='col-sm-3 file-wrapper cell-container'
      >
        {
          item.type === 'dir'
          ? <div>
              <Link to={pathname} className='cell-container'>
                <span className='folder' />
                {item.name}
              </Link>
            </div>
          : <File
              size={item.size}
              name={item.name}
            />
        }
      </div>
    )
  }

  render () {
    const {loading} = this.props;

    return (
      <div className='main-content-container'>
        {
          loading
            ? <Spinner />
            : R.map(this.renderContent, this.getItems())
        }
      </div>
    );
  }
}

MainContent.propTypes = propTypes;
MainContent.defaultProps = defaultProps;

export default MainContent;
