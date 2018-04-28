import { ON_PAYLOAD } from './state.actions';

export const stateReducer = (state = {}, action) => {
  switch (action.type) {
    case ON_PAYLOAD:
      return state;
    default:
      return state;
  }
};

export default stateReducer;
