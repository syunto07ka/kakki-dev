import * as React from 'react';
import IconImage from 'images/profile.jpg';
import './style.module.scss';
import { Link } from 'react-router-dom';

export const IconName: React.FC = () => (
  <>
    <img alt="カッキー" src={IconImage} styleName="icon" /><Link styleName="name" to="/profile">カッキー(@kakki09)</Link>
  </>
);
