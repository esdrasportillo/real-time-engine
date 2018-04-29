import { getStore } from './store';

export const ON_PAYLOAD = 'ON_PAYLOAD';

const registerPayloadHandler = domain => payload =>
  getStore().dispatch({
    type: ON_PAYLOAD,
    domain,
    payload,
  });


export default registerPayloadHandler;
