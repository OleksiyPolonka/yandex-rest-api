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

    fetch('https://cloud-api.yandex.net:443/v1/disk', {
      headers: {Authorization: `OAuth ${token}`}
    })
      .then(res => {
        if (res.status === 401) {
          res.json()
            .then(res => dispatch(setDiskError(res)))
        } else {
          res.json()
            .then(res => dispatch(setDiskData(res)))
        }
      })
      .catch(err =>
        dispatch(setDiskError(err))
      );
  };
}

export default function reducer(state = {}, action) {
  switch (action.type){

  case SET_DISK_LOADING:
    debugger
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
        ...state.disk,
        data: action.data,
        loading: false
      }
    );

  case SET_DISK_ERROR:
    return Object.assign(
      {},
      state,
      {
        ...state.disk,
        error: action.error,
        loading: false
      }
    );

  default:
    return state;
  }
}