import * as React from 'react';
import { Article, Store } from "model";
import { ArticlesRow } from 'components/molecules/ArticlesRow';
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import { articles } from 'constants/articles';
import { ContentWrapper } from 'components/organizms/ContentWrapper';
import { SectionWrapper } from 'components/organizms/SectionWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { fetch } from 'redux/services/articles';
import { rootState } from 'redux/store/store';

interface Props {
  store: Store
}

export const Articles: React.FC<Props> = ({ store }) => {
  // FIXME: cannot build when use Recoil
  // const articles = useRecoilValue<Article[]>(getArticles);
  // const theme = useRecoilValue<Theme>(getTheme);
  const dispatch = useDispatch();
  const isLoading = useSelector((state: rootState) => state.articles.isLoading);

  React.useEffect(() => {
    store.setActiveTab('blog');
  });

  return (
    <React.Fragment>
      <MainTemplate>
        <Header activeTab={store.activeTab} />
        <button onClick={() => dispatch(fetch())}>Dispatch Button</button>
        {isLoading === true && <div>テスト表示</div>}
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
