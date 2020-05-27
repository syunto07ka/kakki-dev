import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Articles } from 'containers/pages/Articles';
import { Profile } from 'containers/pages/Profile';
import { ArticlePage } from 'containers/pages/Article';
import { ActiveTab } from 'model';
// import { Tab } from 'constants/tabs';

export const Container: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<ActiveTab>('blog');

  const store = {
    activeTab,
    setActiveTab
  }

  return (
    <BaseRouter store={store} />
  )
};

interface RootProps {
  store: {
    activeTab: ActiveTab,
    setActiveTab: React.Dispatch<React.SetStateAction<ActiveTab>>
  }
}

const BaseRouter: React.FC<RootProps> = ({ store }) => (
  <Router>
    <Switch>
      <Route exact={true} path="/">
        <Articles store={store} />
      </Route>
      <Route exact={true} path="/articles/:articleId">
        <ArticlePage store={store} />
      </Route>
      <Route path="/profile">
        <Profile store={store} />
      </Route>
    </Switch>
  </Router>
);
