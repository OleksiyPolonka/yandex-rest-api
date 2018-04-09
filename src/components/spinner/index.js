import React from 'react';
import './spinner.css';

/* Implementation */
const Spinner = () => {
  return (
    <div className="wrapper">
      <div className="spinner-wrapper">
        <div className="spinner">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
