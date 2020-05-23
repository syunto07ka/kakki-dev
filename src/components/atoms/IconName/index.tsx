import * as React from 'react';
import IconImage from 'images/profile.jpg';
import './style.module.scss';

export const IconName: React.FC = () => (
  <>
    <img alt="カッキー" src={IconImage} styleName="icon" /><div styleName="name">カッキー(@kakki09)</div>
  </>
);
