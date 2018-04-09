import React from 'react';

import Header from '../header'
import Navbar from '../navbar'
import Sidebar from './sidebar'
import MainContent from './mainContent';

import './dashboard.css';

class Dashboard extends React.Component {
  componentWillReceiveProps ({location}) {
    const token = window.localStorage.getItem('token');

    if (location.pathname !== this.props.location.pathname) {
      this.props.fetchFiles(location.pathname)
    }
  }
  render(){
    const { disk, files, location } = this.props;

    return (
      <div className='dashboard-container'>
        <Header name={disk.user.display_name} />
        <div className='container dashboard-wrapper'>
          <Sidebar systemFolders={disk.system_folders} />
          <div className='col-sm-9 content-wrapper'>
            <Navbar pathname={location.pathname}/>
            {
              files.data || files.loading
              ? <MainContent files={files} pathname={location.pathname}/>
              : ''
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;