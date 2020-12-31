import * as React from 'react';
import './style.module.scss';
import { Tag } from 'model';

interface Props {
  tag: Tag
}

export const TagChip: React.FC<Props> = ({tag}) => {
  // const style = {
  //   backgroundColor: tag.labelColor,
  //   color: tag.letterColor,
  // };

  return (
    <>
      <div styleName="tag">{tag.displayName}</div>
    </>
  )
};
