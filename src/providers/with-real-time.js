import { compose } from 'recompose';
import { connect } from 'react-redux';

import withState from './with-state';

const mapStateToProps = state => ({
  ...state,
});

export const withRealTime = (Component) => {
  const enhance = compose(
    withState,
    connect(mapStateToProps),
  );

  return enhance(Component);
};


export default withRealTime;
