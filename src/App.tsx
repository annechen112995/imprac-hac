import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';

import { GlobalStateContainer } from './provider/GlobalStateContainer';

import LandingPage from './pages/landing';

import { Routes } from './utils/routes';

function App() {
  const globalState = GlobalStateContainer.useContainer();

  return (
    <GlobalStateContainer.Provider>
      <BreakpointProvider>
        <Switch>
          <Route path={Routes.LandingPage} component={LandingPage} />
        </Switch>
      </BreakpointProvider>
    </GlobalStateContainer.Provider>
  );
}

export default App;
