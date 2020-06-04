import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Articles } from 'containers/pages/Articles';
import { Profile } from 'containers/pages/Profile';
import { ArticlePage } from 'containers/pages/Article';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

export const Container: React.FC = () => (
  <Provider store={store}>
    <BaseRouter />
  </Provider>
);

const BaseRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/">
        <Articles />
      </Route>
      <Route exact={true} path="/articles/:articleId">
        <ArticlePage />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  </Router>
);
