import { createStore } from 'redux';
import { stateReducer } from './state.reducer';

let store;

export const getStore = () => {
  if (!store) {
    store = createStore(stateReducer);
  }

  return store;
};

export default getStore;
