import * as React from 'react';
import { Navigation } from 'components/molecules/Navigation';
import { Link } from 'react-router-dom';
import './style.module.scss';
import { ActiveTab } from 'model';

interface Props {
  activeTab: ActiveTab
}

export const Header: React.FC<Props> = ({ activeTab }) => (
  <div styleName="wrapper">
    <Link styleName="title" to="/">kakki-dev</Link>
    <Navigation activeTab={activeTab}/>
  </div>
);
