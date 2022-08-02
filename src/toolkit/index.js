import { makeObservable, observable, action } from 'mobx';

export class AsyncSlice {
  pending = false;
  success =  false;
  failure = false;

  constructor() {
    makeObservable(this, {
      pending: observable,
      success: observable,
      failure: observable,

      doPending: action,
      doSuccess: action,
      doFailure: action,
    })
  }

  doPending () {
    this.pending = true;
    this.failure = false;
    this.success = false;
  }

  doSuccess () {
    this.pending = false;
    this.failure = false;
    this.success = true;
  }

  doFailure () {
    this.pending = false;
    this.failure = true;
    this.success = false;
  }
}

export class ValueSlice {
  value;
  initialValue;

  constructor (initialValue) {
    this.value = initialValue;
    this.initialValue = initialValue;

    makeObservable(this, {
      value: observable,

      set: action,
      reset: action,
      merge: action,
    })
  }

  set = newValue => {
    this.value = newValue;
  }

  reset = () => {
    this.value = this.initialValue;
  }

  merge = (mergeValue) => {
    if (Array.isArray(this.value)){
      this.value.push(...mergeValue);
    }
    if (typeof this.value === 'object'){
      Object.assign(this.value, mergeValue);
    }
  }
}
