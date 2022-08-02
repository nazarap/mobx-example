import React from 'react';
import './App.css';
import CounterValue from './components/CounterValue';
import CounterButtons from './components/CounterButtons';
import { StoreProvider } from './context/store';
import services from './services';

const App = () => (
  <StoreProvider {...services} >
    <div className="App">
      <header className="App-header">
        <CounterValue />
        <CounterButtons />
      </header>
    </div>
  </StoreProvider>
)

export default App;
