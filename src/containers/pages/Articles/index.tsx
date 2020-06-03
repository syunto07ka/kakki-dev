import * as React from 'react';
import { Article } from "model";
import { ArticlesRow } from 'components/molecules/ArticlesRow';
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import { articles } from 'constants/articles';
import { ContentWrapper } from 'components/organizms/ContentWrapper';
import { SectionWrapper } from 'components/organizms/SectionWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from 'redux/store';
import { changeTab } from 'redux/slices/activeTab';

export const Articles: React.FC = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: rootState) => state.activeTab.value);

  React.useEffect(() => {
    dispatch(changeTab('blog'));
  }, [dispatch]);

  return (
    <React.Fragment>
      <MainTemplate>
        <Header activeTab={activeTab} />
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
