import { getStore } from './store';

export const ON_PAYLOAD = 'ON_PAYLOAD';

const handlePayload = domain => payload =>
  getStore().dispatch({
    type: ON_PAYLOAD,
    domain,
    payload,
  });


export default handlePayload;
