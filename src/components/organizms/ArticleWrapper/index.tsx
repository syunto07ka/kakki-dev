import * as React from 'react';
import './style.module.scss';

interface Props {
  title: string;
}

export const ArticleWrapper: React.FC<Props> = ({ title, children }) => (
  <div styleName="wrapper">
    <div styleName="title">{title}</div>
    <div styleName="content">{children}</div>
  </div>
);
