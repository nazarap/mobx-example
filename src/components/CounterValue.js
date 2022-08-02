import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../context/store';

const CounterValue = () => {
  const { counter } = useStore();

  const counterValue = counter.value;
  const pending = counter.pending;

  console.count('Rerender Value');
  return (
    <>
      {pending && <p>Loading...</p>}
      <p>
        Counter: {counterValue}
      </p>
    </>
  );
}

export default observer(CounterValue);
