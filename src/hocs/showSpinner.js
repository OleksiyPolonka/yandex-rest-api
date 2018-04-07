import React from 'react';

import Spinner from '../components/spinner';

const predicate = ({disk, files}) => disk.loading || files.loading

const showSpinner = Component => {
  const showSpinner = props => 
    predicate(props) ? <Spinner /> : <Component {...props} />;

    return showSpinner;
};

export default showSpinner;
