import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Top from '../pages/Top';
import Choose from '../pages/Choose';
import Cart from '../pages/Cart';
import Itemdetails from '../pages/Itemdetails';

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
        <Route
          exact
          path="/details/:index"
          render={({ match }) => <Itemdetails index={match.params.index} />}
        />
      </Switch>
    </HashRouter>
  );
};

export default Router;
