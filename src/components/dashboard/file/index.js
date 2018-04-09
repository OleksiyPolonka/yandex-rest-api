import React from 'react';
import Proptypes from 'prop-types';

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
        {size ? size / 1000000 : size}
      </div>
    </div>
  )
};

File.propTypes = propTypes;
File.defaultProps = defaultProps;

export default File;
