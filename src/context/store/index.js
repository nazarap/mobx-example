import React, { useContext } from 'react';

const StoreContext = React.createContext({});

export const StoreProvider = ({ children, ...stores }) => (
  <StoreContext.Provider value={stores}>
    {children}
  </StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);
