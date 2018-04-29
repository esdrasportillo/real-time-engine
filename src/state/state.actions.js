import { getStore } from './store';

export const ON_PAYLOAD = 'ON_PAYLOAD';

const handlePayload = (payload) => {
  getStore().dispatch({
    type: ON_PAYLOAD,
    payload,
  });
};

export default handlePayload;
