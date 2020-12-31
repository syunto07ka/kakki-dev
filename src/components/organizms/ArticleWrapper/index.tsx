import * as React from 'react';
import './style.module.scss';
import { Article, Tag } from 'model';
import { TagChip } from 'components/atoms/TagChip';

interface Props {
  article: Article;
}

export const ArticleWrapper: React.FC<Props> = ({ article, children }) => (
  <div styleName="wrapper">
    <div styleName="title-wrapper">
      <div styleName="title">{article.id + '. ' + article.title}</div>
      {article.tags && (
        <div styleName="tags">
          {article.tags && article.tags.map((tag: Tag) => (
            <div styleName="tag">
              <TagChip tag={tag} key={tag.name} />
            </div>
          ))}
        </div>
      )}
    </div>
    <div styleName="content">{children}</div>
  </div>
);
