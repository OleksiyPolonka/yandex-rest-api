import React from 'react';

import Header from '../header'
import Sidebar from '../sidebar'

class Dashboard extends React.Component {
  render(){
    const { disk } = this.props;

    return (
      <div>
        <Header name={disk.user.display_name} />
        <div className='container'>
          <Sidebar systemFolders={disk.system_folders} />
        </div>
      </div>
    );
  }
}

export default Dashboard;