import * as React from 'react';
import { Article, Theme } from "model";
import { ArticlesRow } from 'components/molecules/ArticlesRow';
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import { articles } from 'repositories/articles';
import { whiteTheme } from '../../../constants/themes';

export const Articles: React.FC = () => {
  // FIXME: cannot build when use Recoil
  // const articles = useRecoilValue<Article[]>(getArticles);
  // const theme = useRecoilValue<Theme>(getTheme);
  const theme: Theme = whiteTheme;

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
