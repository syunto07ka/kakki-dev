import * as React from 'react';
import './style.module.scss';

interface Props {
  title: string;
}

export const SectionWrapper: React.FC<Props> = ({ children, title }) => (
  <div styleName="wrapper">
    <div styleName="title">{title}</div>
    <div styleName="content">{children}</div>
  </div>
);
