import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { getArticles } from 'states/selectors/getArticles';
import { getTheme } from 'states/selectors/getTheme';
import { Article, Theme } from "model";
import { ArticlesRow } from 'components/molecules/ArticlesRow';
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
          <ArticlesRow article={article} key={String(article.id)} />
        ))}
      </MainTemplate>
    </React.Fragment>
  );
};
