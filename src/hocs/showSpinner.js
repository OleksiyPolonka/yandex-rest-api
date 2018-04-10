import React from 'react';

import Spinner from '../components/spinner';

const predicate = ({disk, files}) =>
  (!disk.data || !files.data && disk.loading)
  || (!disk.data || !files.data && files.loading)

const showSpinner = Component => {
  const showSpinner = props => 
    predicate(props) ? <Spinner /> : <Component {...props} />;

    return showSpinner;
};

export default showSpinner;
