import React from 'react';

import './alert.css';

const Alert = ({error}) => {
  return (
      <div className="error-message col-sm-4 col-md-ofsest-4">{ error }</div>
  );
};

export default Alert;
