import React from 'react';
import Proptypes from 'prop-types';

import Header from '../header'
import Navbar from '../navbar'
import Sidebar from './sidebar'
import MainContent from './mainContent';

import './dashboard.css';

/* Interface */
const propTypes = {
  disk: Proptypes.object,
  files: Proptypes.object,
  location: Proptypes.object,
  fetchFiles: Proptypes.func
};

/* Default props */
const defaultProps = {
  disk: {},
  files: {},
  location: {},
  fetchFiles: () => true
};

/* Implementation */
class Dashboard extends React.Component {
  componentWillReceiveProps ({location}) {
    const token = window.localStorage.getItem('token');

    if (location.pathname !== this.props.location.pathname) {
      this.props.fetchFiles(location.pathname)
    }
  }
  render() {
    const {
      files,
      location: {pathname, hash},
      disk: {data: {user, system_folders}}
    } = this.props;

    return (
      <div className='dashboard-container'>
        <Header name={user.display_name} />
        <div className='container dashboard-wrapper'>
          <Sidebar
            hash={hash}
            systemFolders={system_folders}
          />
          <div className='col-sm-9 content-wrapper'>
            <Navbar pathname={pathname} hash={hash}/>
            {
              files.data || files.loading
              ? <MainContent
                  data={files.data}
                  loading={files.loading}
                  pathname={pathname}/>
              : ''
            }
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;

export default Dashboard;