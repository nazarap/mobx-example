import { AsyncSlice } from '../../../toolkit';
import mockRequest from '../../../utils/mockRequest';
import counter from '../models/counter';

const loadCounterData = async () => {
  loadCounterData.state.doPending();
  try {
    const data = await mockRequest(555);

    counter.set(data);

    loadCounterData.state.doSuccess();
  } catch (e) {
    loadCounterData.state.doFailure();
  }
}

loadCounterData.state = new AsyncSlice();

export default loadCounterData;
