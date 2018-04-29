import React from 'react';
import { Provider } from 'react-redux';

import { getStore } from '../state/store';

function withState(Component) {
  return class extends React.Component {
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return (
        <Provider store={getStore()}>
          <Component {...this.props} />
        </Provider>
      );
    }
  };
}


export default withState;
