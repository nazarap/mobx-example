import { makeAsyncSlice } from '../toolkit';
import mockRequest from '../utils/mockRequest';

const counter = makeAsyncSlice({
  value: 12,
  fetch: async () => {
    counter.doPending();
    counter.reset();

    try {
      const newValue = await mockRequest(555);
      counter.set(newValue);

      counter.doSuccess();
    } catch (e) {
      counter.doFailure();
    }
  },

  increase: () => counter.set(counter.value + 1),
  decrease: () => counter.set(counter.value - 1),
});

export default counter;
