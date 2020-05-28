import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Articles } from 'containers/pages/Articles';
import { Profile } from 'containers/pages/Profile';
import { ArticlePage } from 'containers/pages/Article';
import { ActiveTab } from 'model';
import { Provider } from 'react-redux';
import { store } from 'redux/store/store';
// import { Tab } from 'constants/tabs';

export const Container: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<ActiveTab>('blog');

  const oldStore = {
    activeTab,
    setActiveTab
  }

  return (
    <Provider store={store}>
      <BaseRouter oldStore={oldStore} />
    </Provider>
  )
};

interface RootProps {
  oldStore: {
    activeTab: ActiveTab,
    setActiveTab: React.Dispatch<React.SetStateAction<ActiveTab>>
  }
}

const BaseRouter: React.FC<RootProps> = ({ oldStore }) => (
  <Router>
    <Switch>
      <Route exact={true} path="/">
        <Articles store={oldStore} />
      </Route>
      <Route exact={true} path="/articles/:articleId">
        <ArticlePage store={oldStore} />
      </Route>
      <Route path="/profile">
        <Profile store={oldStore} />
      </Route>
    </Switch>
  </Router>
);
