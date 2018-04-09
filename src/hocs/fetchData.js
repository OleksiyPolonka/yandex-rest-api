import * as R from 'ramda'; 
import {lifecycle} from 'recompact';

const fetchData = (fetchFn) => lifecycle({
  componentWillMount () {
      fetchFn(this.props);
  }
});

export default fetchData;
