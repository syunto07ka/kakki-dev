import * as React from 'react';
import { Theme } from 'model';
import { Navigation } from 'components/molecules/Navigation';
import { Link } from 'react-router-dom';
import './style.module.scss';

interface Props {
  theme: Theme
}

export const Header: React.FC<Props> = () => (
  <div styleName="wrapper">
    <Link styleName="title" to="/">kakki-dev</Link>
    <Navigation isActive={true}/>
  </div>
);
