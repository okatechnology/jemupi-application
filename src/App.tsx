import React, { useEffect } from 'react';
import Router from './router/Router';
import { GlobalStateProvider } from './global/ChooseContext';
import GlobalStyle from './global/GlobalStyle';

const App = () => {
  useEffect(() => {
    const event = (e: BeforeUnloadEvent) => {
      e.returnValue = 'Do you really leave this site?';
    };

    window.addEventListener('beforeunload', event, false);
    return () => {
      window.removeEventListener('beforeunload', event, false);
    };
  });
  return (
    <>
      <GlobalStateProvider>
        <GlobalStyle />
        <Router />
      </GlobalStateProvider>
    </>
  );
};

export default App;
