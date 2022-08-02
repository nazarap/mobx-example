import { action, makeObservable, computed } from 'mobx';
import { ValueSlice } from '../../../toolkit';

class Counter extends ValueSlice {
  constructor () {
    super(12);

    makeObservable(this, {
      twiceValue: computed,

      increase: action,
      decrease: action,
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
}

export default new Counter();
