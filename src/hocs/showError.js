import React from 'react';

import * as R from 'ramda';
import wrapDisplayName from 'recompact/wrapDisplayName';

// import {Alert} from '../components/common';

const getError = R.either(
  R.path(['disk', 'error']),
  R.path(['files', 'error'])
);

const predicate = R.compose(
  a => !!a,
  getError
);

const showError = Component => {
  class showError extends React.Component {
    render () {
      return predicate(this.props) ? (
        <div>
          {getError(this.props)}
        </div>
        ) : <Component {...this.props} />;
    }
  }
  showError.displayName = wrapDisplayName(Component, 'showError');

  return showError;
};

export default showError;
