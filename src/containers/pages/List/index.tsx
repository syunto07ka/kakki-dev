import * as React from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { articles as articlesAtom } from 'states/atoms/articles';
import { getArticles } from 'states/selectors/getArticles';
import { Article } from "model";

export const List: React.FC = () => {
  const setArticles = useSetRecoilState(articlesAtom);
  const articles: any = useRecoilValue(getArticles);

  React.useEffect(() => {
    setArticles([]);
  });

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
