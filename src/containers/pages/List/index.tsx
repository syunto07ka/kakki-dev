import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { getArticles } from 'states/selectors/getArticles';
import { Article } from "model";

export const List: React.FC = () => {
  const articles = useRecoilValue<Article[]>(getArticles);

  return (
    <div>
      {articles.map((article: Article) => (
        <div key={String(article.id)}>
          <div>{article.id}</div>
          <div>{article.title}</div>
        </div>
      ))}
    </div>
  );
};
