import React from 'react';
import Proptypes from 'prop-types';

import './alert.css';

/* Interface */
const propTypes = {
  error: Proptypes.string
};

/* Default props */
const defaultProps = {
  error: ''
};

/* Implementation */
const Alert = ({error}) => {
  return (
      <div className="error-message col-sm-4 col-md-ofsest-4">{ error }</div>
  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
