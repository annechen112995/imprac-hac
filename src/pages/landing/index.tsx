import React from 'react';
import { useHistory } from 'react-router-dom';

import { Routes } from '../../utils/routes';

export default function LandingPage() {
  const history = useHistory();

  return (
    <div className={`flex flex-row h-screen justify-center bg-blue-100`}>
      Hello World
    </div>
  );
}
