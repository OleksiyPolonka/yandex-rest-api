import { connect } from 'react-redux';
import Dashboard from '../../components/dashboard';
import showSpinner from '../../hocs/showSpinner';
import showError from '../../hocs/showError';
import fetchData from '../../hocs/fetchData';

import {fetchDisk} from '../../redux/modules/disk';
import {fetchFiles} from '../../redux/modules/files';

import * as R from 'ramda';
import { withProps } from 'recompact'
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({disk, files}) => ({ disk, files });

function mapDispatchToProps(dispatch) {
  const token = window.localStorage.getItem('token');;

  return {
    fetchDisk: () => dispatch(fetchDisk(token)),
    fetchFiles: (pathname) => dispatch(fetchFiles(token, pathname)),
  };
}

export default R.compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  fetchData(
    ({fetchDisk, fetchFiles, location}) => {
      fetchDisk();
      fetchFiles(location.pathname);
    }
  ),
  showError,
  showSpinner,
  withProps(({disk, files}) => ({
    disk: disk.data,
    files
  }))
)(Dashboard);
