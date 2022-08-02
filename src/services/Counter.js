import { action, makeObservable, observable, computed } from 'mobx';
import { AsyncValueSlice } from '../toolkit';
import mockRequest from '../utils/mockRequest';

class Counter extends AsyncValueSlice {
  constructor () {
    super(12);
    makeObservable(this, {
      twiceValue: computed,

      increase: action,
      decrease: action,
      fetch: action,
    })
  }

  get twiceValue () {
    return this.value * 2;
  }

  increase = () => {
    this.value += 1;
  }
  decrease = () => {
    this.value -= 1
  }

  fetch = async () => {
    this.doPending();
    this.reset();

    try {
      const value = await mockRequest(555);
      this.set(value);

      this.doSuccess();
    } catch (e) {
      this.doFailure();
    }
  }
}

export default Counter;
