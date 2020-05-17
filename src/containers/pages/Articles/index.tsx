import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { getArticles } from 'states/selectors/getArticles';
import { getTheme } from 'states/selectors/getTheme';
import { Article, Theme } from "model";
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';

export const Articles: React.FC = () => {
  const articles = useRecoilValue<Article[]>(getArticles);
  const theme = useRecoilValue<Theme>(getTheme);

  return (
    <React.Fragment>
      <MainTemplate>
        <Header theme={theme}/>
        {articles.map((article: Article) => (
          <div key={String(article.id)}>
            <div>{article.id}</div>
            <div>{article.title}</div>
          </div>
        ))}
      </MainTemplate>
    </React.Fragment>
  );
};
