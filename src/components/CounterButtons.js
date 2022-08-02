import React from 'react';
import { useStore } from '../context/store';

const CounterButtons = React.memo(() => {
  const { counter } = useStore();

  console.count('Rerender Actions');

  return (<>
    <button onClick={counter.fetch}>async action</button> <br/>
    <button onClick={counter.increase}>increase</button> <br/>
    <button onClick={counter.decrease}>decrease</button> <br/>
    <button onClick={counter.reset}>reset</button>
  </>)
})

export default CounterButtons;
