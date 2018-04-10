import React from 'react';
import Proptypes from 'prop-types';

import * as R from 'ramda';

/* Interface */
const propTypes = {
  name: Proptypes.string,
  size: Proptypes.number
};

/* Default props */
const defaultProps = {
  name: '',
  size: 0
};

/* Implementation */
const File = ({ name, size }) => {
  return (
    <div className='file-container'>
      <div>
        <span>Имя: </span>
        {name}
      </div>
      <div>
        <span>Размер: </span>
        { R.divide(size, 1000000) }
      </div>
    </div>
  )
};

File.propTypes = propTypes;
File.defaultProps = defaultProps;

export default File;
