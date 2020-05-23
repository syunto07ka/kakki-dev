import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.module.scss';
import { ActiveTab } from 'model';
import { Tab } from 'constants/tabs';

interface Props {
  activeTab: ActiveTab,
}

export const Navigation: React.FC<Props> = ({ activeTab }) => {
  return (
    <div styleName="wrapper">
      <Link styleName={activeTab === Tab.blog.key ? 'nav-active' : 'nav'} to="/">{Tab.blog.value}</Link>
      <Link styleName={activeTab === Tab.profile.key ? 'nav-active' : 'nav'} to="/profile">{Tab.profile.value}</Link>
    </div>
  )
};
