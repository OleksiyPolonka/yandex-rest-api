import axios from 'axios';
import { BASE_URL } from '../../constants/common';

const SET_DISK_DATA = 'SET_DISK_DATA';
const SET_DISK_ERROR = 'SET_DISK_ERROR';
const SET_DISK_LOADING = 'SET_DISK_LOADING';

const setDiskLoading = () => ({
  type: SET_DISK_LOADING
})

const setDiskData = data => ({
  type: SET_DISK_DATA,
  data
})

const setDiskError = error => ({
  type: SET_DISK_ERROR,
  error
})

export const fetchDisk = token => {
  return dispatch => {
    dispatch(setDiskLoading());

    axios(BASE_URL, {
      headers: {Authorization: `OAuth ${token}`}
    })
      .then(res => {
        dispatch(setDiskData(res.data));
      })
      .catch(err =>
        dispatch(setDiskError(err))
      );
  };
}

const defaultState = {
  data: null,
  error: null,
  loading: true
};

export default function reducer(state = defaultState, action) {
  switch (action.type){
    case SET_DISK_LOADING:
      return Object.assign(
        {},
        state,
        {
          ...state.disk,
          loading: true
        }
      );

    case SET_DISK_DATA:
      return Object.assign(
        {},
        state,
        {
          error: null,
          loading: false,
          data: action.data
        }
      );

    case SET_DISK_ERROR:
      return Object.assign(
        {},
        state,
        {
          data: null,
          loading: false,
          error: action.error,
        }
      );

    default:
      return state;
    }
}