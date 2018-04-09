import React, { Component } from 'react';
import uuid from 'uuid';
import * as R from 'ramda';
import { Link } from 'react-router-dom';

import Spinner from '../../spinner';
import File from '../file'

import '../dashboard.css';

class MainContent extends Component {
  constructor (...args) {
    super(...args);
  }

  getItems () {
    return R.path(
      ['data', '_embedded', 'items'],
    this.props.files)
  }

  renderContent = item => {
    console.log('item: ', item);
    const [, pathname] = item.path.split('disk:')
    console.log('pathname: ', pathname);

    return (
      <div
        key={uuid()}
        className='col-sm-3 file-wrapper cell-container'
      >
        {
          item.type === 'dir'
          ? <div>
              {/* <img src='../../../img/folder.svg' width="189" height="255"/> */}
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
    const {files} = this.props;

    return (
      <div className='main-content-container'>
        {
          files.loading
            ? <Spinner />
            : R.map(this.renderContent, this.getItems())
        }
      </div>
    );
  }
}

export default MainContent;
