import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Articles } from 'containers/pages/Articles';
import { Profile } from 'containers/pages/Profile';
import { RecoilRoot } from 'recoil';
import { ArticlePage } from 'containers/pages/Article';

export const Container: React.FC = () => (
  <RecoilRoot>
    <BaseRouter />
  </RecoilRoot>
);

const BaseRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/">
        <Articles />
      </Route>
      <Route path="/articles">
        <ArticlePage />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  </Router>
);
