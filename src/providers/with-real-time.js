import { compose } from 'recompose';
import { connect } from 'react-redux';

import withState from './with-state';

const makeMapStateToProps = domain => state => ({
  ...state[domain],
});

export const withRealTime = domain => (Component) => {
  const enhance = compose(
    withState,
    connect(makeMapStateToProps(domain)),
  );

  return enhance(Component);
};


export default withRealTime;
