import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Top from '../pages/Top';
import Choose from '../pages/Choose';
import Cart from '../pages/Cart';

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
        <Route exact path="/cart" render={() => <Cart />} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
