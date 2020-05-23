import * as React from 'react';
import './style.module.scss';
import IconImage from 'images/profile.jpg';

export const ProfileIcon: React.FC = () => (
  <img alt="カッキー" src={IconImage} styleName="icon-image" />
);
