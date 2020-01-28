import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Top from '../pages/Top';

const Router = () => {
  return (
    <HashRouter>
      <Route render={() => <Top />} />
    </HashRouter>
  );
};

export default Router;
