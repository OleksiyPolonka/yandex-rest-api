import axios from 'axios';

const SET_FILES_DATA = 'SET_FILES_DATA';
const SET_FILES_ERROR = 'SET_FILES_ERROR';
const SET_FILES_LOADING = 'SET_FILES_LOADING';

const setFilesLoading = () => ({
  type: SET_FILES_LOADING
})

const setFilesData = data => ({
  type: SET_FILES_DATA,
  data
})

const setFilesError = error => ({
  type: SET_FILES_ERROR,
  error
})

export const fetchFiles = (token, path = '/') => {
  return dispatch => {
    dispatch(setFilesLoading());

    axios(`https://cloud-api.yandex.net:443/v1/disk/resources?path=${path}`, {
      headers: {Authorization: `OAuth ${token}`}
    })
      .then(res => {
        dispatch(setFilesData(res.data))
      })
      .catch(err =>
        dispatch(setFilesError(err))
      );
  };
}

export default function reducer(state = {}, action) {
  switch (action.type){

  case SET_FILES_LOADING:
    return Object.assign(
      {},
      state,
      {
        ...state.files,
        loading: true
      }
    );

  case SET_FILES_DATA:
    return Object.assign(
      {},
      state,
      {
        error: null,
        loading: false,
        data: action.data
      }
    );

  case SET_FILES_ERROR:
    return Object.assign(
      {},
      state,
      {
        data: null,
        loading: false,
        error: action.error
      }
    );

  default:
    return state;
  }
}