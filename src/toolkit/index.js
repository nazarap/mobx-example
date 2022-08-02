import { makeAutoObservable } from 'mobx';

export const makeSlice = structure => {
  const slice = makeAutoObservable({
    ...structure,

    set (newValue) {
      slice.value = newValue;
    },
    reset () {
      slice.value = structure.value;
    },
    merge (mergeValue) {
      if (Array.isArray(slice.value)){
        slice.value = [ ...slice.value, ...mergeValue ];
      }
      if (typeof slice.value === 'object'){
        slice.value = { ...slice.value, ...mergeValue };
      }
    }
  });

  return slice;
};

export const makeAsyncSlice = structure => {
  const slice = makeSlice({
    ...structure,

    pending: false,
    success: false,
    failure: false,
    doPending () {
      slice.pending = true;
      slice.failure = false;
      slice.success = false;
    },
    doSuccess () {
      slice.pending = false;
      slice.failure = false;
      slice.success = true;
    },
    doFailure () {
      slice.pending = false;
      slice.failure = true;
      slice.success = false;
    },
  });

  return slice;
};
