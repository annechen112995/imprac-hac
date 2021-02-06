import { useState } from 'react';
import { createContainer } from 'unstated-next';

function useGlobalState() {

  const [testState, setTestState] = useState<string>('test');

  return {
    testState, setTestState
  };
}

export const GlobalStateContainer = createContainer(useGlobalState);
