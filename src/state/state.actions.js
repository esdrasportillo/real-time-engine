export const ON_PAYLOAD = 'ON_PAYLOAD';

const handlePayload = payload => ({
  type: ON_PAYLOAD,
  payload,
});

export default handlePayload;
