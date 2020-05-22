import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.module.scss';

interface Props {
  isActive: boolean
}

export const Navigation: React.FC<Props> = () => (
  <div styleName="wrapper">
    <Link styleName="nav" to="/">Blog</Link>
  </div>
);
