import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import disk from './modules/disk';
import files from './modules/files';

const loggerMiddleware = createLogger();

const initialState = {
  disk: {
    data: null,
    error: null,
    loading: true
  },
  files: {
    data: null,
    error: null,
    loading: true
  }
}

const createStoreWithMiddleware = applyMiddleware(thunk, loggerMiddleware)(createStore); // apply logger to redux

const reducer = combineReducers({
  disk,
  files
});

const store = createStoreWithMiddleware(reducer, initialState);

export default store;
