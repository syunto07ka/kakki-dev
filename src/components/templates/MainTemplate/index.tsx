import * as React from 'react';
import './style.module.scss';

export const MainTemplate: React.FC = ({ children }) => (
  <div styleName="template">{children}</div>
);
