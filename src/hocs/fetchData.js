import * as R from 'ramda'; 
import {lifecycle} from 'recompact';

const defaultPredicate =
  R.compose(
    R.compose(R.not, R.either(R.isEmpty, R.not)),
    R.path(['baseCurrency'])
);


const fetchData = (fetchFn, predicate = defaultPredicate) => lifecycle({
  componentWillMount () {
      fetchFn(this.props);
  },
  componentWillReceiveProps (nextProps) {
    if (predicate(nextProps)) fetchFn(nextProps);
  }
});

export default fetchData;
