import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../context/store';
import loadCounterData from '../services/counter/actions/loadCounterData';

const CounterValue = () => {
  const { counter } = useStore();

  const counterValue = counter.value;
  const twiceValue = counter.twiceValue;
  const pending = loadCounterData.state.pending;

  console.count('Rerender Value');
  return (
    <>
      {pending && <p>Loading...</p>}
      <p>
        Counter: {counterValue} <br/>
        Multiply counter: {twiceValue}
      </p>
    </>
  );
}

export default observer(CounterValue);
