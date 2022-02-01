import '@scss/main.scss'
import React from 'react';
import { Route, Routes } from 'react-router'
import { DefaultHelmet } from 'nl-ui';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';

function App() {
  return (
    <React.Fragment>
      <DefaultHelmet title="SRT" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
