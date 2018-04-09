import React from 'react';

const File = ({ name, size }) => {
  return (
    <div className='file-container'>
      <div>
        <span>Имя: </span>
        {name}
      </div>
      <div>
        <span>Размер: </span>
        {size / 1000000}
      </div>
    </div>
  )
};

export default File;
