import * as React from 'react';
import './style.module.scss';

export const ContentWrapper: React.FC = ({ children }) => (
  <div styleName="content-wrapper">{children}</div>
);
