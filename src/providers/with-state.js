import React from 'react';
import { Provider } from 'react-redux';

import { getStore } from '../state/store';

const withState = Component => (
  <Provider store={getStore()}>
    <Component />
  </Provider>
);

export default withState;
