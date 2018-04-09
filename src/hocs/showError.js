import React from 'react';

import * as R from 'ramda';
import wrapDisplayName from 'recompact/wrapDisplayName';

import Alert from '../components/alert';

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
      return (
        <div>
          {
            predicate(this.props)
            ? <Alert error={getError(this.props).message} />
            : null
          }
          <Component {...this.props} />
        </div>
      );
    }
  }
  showError.displayName = wrapDisplayName(Component, 'showError');

  return showError;
};

export default showError;
