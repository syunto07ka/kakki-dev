import * as React from 'react';
import { Article, Store } from "model";
import { ArticlesRow } from 'components/molecules/ArticlesRow';
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import { articles } from 'repositories/articles';

interface Props {
  store: Store
}

export const Articles: React.FC<Props> = ({ store }) => {
  // FIXME: cannot build when use Recoil
  // const articles = useRecoilValue<Article[]>(getArticles);
  // const theme = useRecoilValue<Theme>(getTheme);
  store.setActiveTab('blog');

  return (
    <React.Fragment>
      <MainTemplate>
        <Header activeTab={store.activeTab} />
        {articles.map((article: Article) => (
          <ArticlesRow article={article} key={String(article.id)} />
        ))}
      </MainTemplate>
    </React.Fragment>
  );
};
