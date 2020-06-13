import * as React from 'react';
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import { Link, useParams } from 'react-router-dom';
import './style.module.scss';
import { IconName } from 'components/atoms/IconName';
import { ContentWrapper } from 'components/organizms/ContentWrapper';
import { ArticleWrapper } from 'components/organizms/ArticleWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from 'redux/store';
import { changeTab } from 'redux/slices/activeTab';
import { Footer } from 'components/organizms/Footer';
import { fetchArticle } from 'redux/services/article';

export const ArticlePage: React.FC = () => {
  const { articleId } = useParams();
  const dispatch = useDispatch();
  const activeTab = useSelector((state: rootState) => state.activeTab.value);
  const article = useSelector((state: rootState) => state.article.value);
  const articleLoading = useSelector((state: rootState) => state.article.isLoading);

  React.useEffect(() => {
    dispatch(changeTab('blog'));
    dispatch(fetchArticle(articleId));
  }, [articleId, dispatch]);

  const Description: React.FC | undefined = article ?  article.description : undefined;

  return (
    <React.Fragment>
      <MainTemplate>
        <Header activeTab={activeTab} />
        {articleLoading && <div style={{textAlign: 'center', marginTop: '48px'}}>ローディング中</div>}
        {article && !articleLoading &&
          <ContentWrapper>
            <ArticleWrapper title={article && article.id + '. ' + article.title}>
              <div styleName="description-wrapper">
                {Description && <Description />}
              </div>
              <div styleName="info-wrapper">
                <div styleName="icon-name"><IconName /></div>
                <div styleName="date">{article && article.date}</div>
              </div>
            </ArticleWrapper>
            <Link styleName="back-link" to="/">ブログ一覧に戻る</Link>
          </ContentWrapper>
        }
        <Footer />
      </MainTemplate>
    </React.Fragment>
  );
};
