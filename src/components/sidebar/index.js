import React, { Component } from 'react';

import * as R from 'ramda';
import uuid from 'uuid';

class Sidebar extends Component {
  renderSystemFolders (folder) {
    return <li key={uuid()}>{folder}</li>
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
      <nav>
        <ul>
          { R.map(this.renderSystemFolders, this.getUniqFolders(systemFolders)) }
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
