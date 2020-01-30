import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Top from '../pages/Top';
import Choose from '../pages/Choose';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Top />} />
        <Route
          exact
          path="/choose/:item"
          render={({ match }) => <Choose pagename={match.params.item} />}
        />
      </Switch>
    </HashRouter>
  );
};

export default Router;
