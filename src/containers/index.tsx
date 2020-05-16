import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { List } from 'containers/pages/List';
import { RecoilRoot } from 'recoil';

export const Container: React.FC = () => (
  <RecoilRoot>
    <BaseRouter />
  </RecoilRoot>
);

const BaseRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/">
        <List />
      </Route>
    </Switch>
  </Router>
);
