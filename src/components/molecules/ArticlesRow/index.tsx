import * as React from 'react';
import { Article } from 'model';
import { Tag } from 'model';
import { Link } from 'react-router-dom';
import './style.module.scss';
import { TagChip } from 'components/atoms/TagChip';

interface Props {
  article: Article;
}

export const ArticlesRow: React.FC<Props> = ({ article }) => (
  <div styleName="wrapper">
    <Link styleName="title" to={`/articles/${article.id}`}>{article.id}. {article.title}</Link>
    <div styleName="content-wrapper">
      <div styleName="date">{article.date}</div>
      {article.tags && (
        <div styleName="tags">
          {article.tags.map((tag: Tag) => (
            <div styleName="tag">
              <TagChip tag={tag} key={tag.name} />
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);
