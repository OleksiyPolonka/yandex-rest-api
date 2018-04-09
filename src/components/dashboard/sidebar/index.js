import React, { Component } from 'react';
import { Link } from 'react-router-dom';



import * as R from 'ramda';
import uuid from 'uuid';

class Sidebar extends Component {
  renderSystemFolders (folder) {
    return (
      <li key={uuid()}>
        <Link to={`/${folder}`}>
          {folder}
        </Link>
      </li>
    )
  }

  getUniqFolders (folders) {
    return R.compose(
      R.uniq,
      R.map(el => el.split('/')[1]),
      R.values
    )(folders)
  }

  render () {
    const { systemFolders } = this.props;
    return (
      <div className='col-sm-3 sidebar-container'>
        <nav>
          <ul>
            { R.map(this.renderSystemFolders, this.getUniqFolders(systemFolders)) }
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
