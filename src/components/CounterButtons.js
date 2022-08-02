import React from 'react';
import { useStore } from '../context/store';
import loadCounterData from '../services/counter/actions/loadCounterData';

const CounterButtons = React.memo(() => {
  const { counter } = useStore();

  console.count('Rerender Actions');

  return (<>
    <button onClick={loadCounterData}>async action</button> <br/>
    <button onClick={counter.increase}>increase</button> <br/>
    <button onClick={counter.decrease}>decrease</button> <br/>
    <button onClick={counter.reset}>reset</button>
  </>)
})

export default CounterButtons;
