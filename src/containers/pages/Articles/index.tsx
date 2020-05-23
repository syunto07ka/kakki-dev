import * as React from 'react';
import { Article, Store } from "model";
import { ArticlesRow } from 'components/molecules/ArticlesRow';
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import { articles } from 'repositories/articles';
import { ContentWrapper } from 'components/organizms/ContentWrapper';
import { SectionWrapper } from 'components/organizms/SectionWrapper';

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
        <ContentWrapper>
          <SectionWrapper title="記事一覧">
            {articles.map((article: Article) => (
              <ArticlesRow article={article} key={String(article.id)} />
            ))}
          </SectionWrapper>
        </ContentWrapper>
      </MainTemplate>
    </React.Fragment>
  );
};
