import * as React from 'react';
import { Article } from "model";
import { ArticlesRow } from 'components/molecules/ArticlesRow';
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import { ContentWrapper } from 'components/organizms/ContentWrapper';
import { SectionWrapper } from 'components/organizms/SectionWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from 'redux/store';
import { changeTab } from 'redux/slices/activeTab';
import { Footer } from 'components/organizms/Footer';
import { fetchArticles } from 'redux/services/articles';

export const Articles: React.FC = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: rootState) => state.activeTab.value);
  const articles = useSelector((state: rootState) => state.articles.value);
  const articlesLoading = useSelector((state: rootState) => state.articles.isLoading);

  React.useEffect(() => {
    dispatch(changeTab('blog'));
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <React.Fragment>
      <MainTemplate>
        <Header activeTab={activeTab} />
        <ContentWrapper>
          <SectionWrapper title="記事一覧">
            {articlesLoading && <div style={{textAlign: 'center', marginTop: '48px'}}>ローディング中</div>}
            {!articlesLoading && articles.map((article: Article) => (
              <ArticlesRow article={article} key={String(article.id)} />
            ))}
          </SectionWrapper>
        </ContentWrapper>
        <Footer />
      </MainTemplate>
    </React.Fragment>
  );
};
