import * as React from 'react';
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import { Link, useParams } from 'react-router-dom';
import './style.module.scss';
import { ContentWrapper } from 'components/organizms/ContentWrapper';
import { ArticleWrapper } from 'components/organizms/ArticleWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from 'redux/store';
import { changeTab } from 'redux/slices/activeTab';
import { Footer } from 'components/organizms/Footer';
import { fetchArticle } from 'redux/services/article';
import { Helmet } from 'react-helmet';

export const ArticlePage: React.FC = () => {
  const { articleId } = useParams<{articleId: any}>(); // FIXME: any許すまじ
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
        {articleLoading && <div style={{textAlign: 'center', marginTop: '48px'}}>ろーでぃんぐ中</div>}
        {article && !articleLoading &&
          <ContentWrapper>
            <ArticleWrapper article={article}>
              <div styleName="description-wrapper">
                {Description && <Description />}
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/intent/tweet?url=https://kakki.dev/articles/${article.id}`}
                styleName="twitter-button"
              >
                ツイート
              </a>
            </ArticleWrapper>
            <Link styleName="back-link" to="/">ぶろぐに戻る</Link>
          </ContentWrapper>
        }
        <Footer />
      </MainTemplate>
      {article && (
        <Helmet>
          <title>{article && `${article.title} | かきおくんの時代劇`}</title>
          <meta property="og:title" content={article && `${article.title} | かきおくんの時代劇`} />
          <link rel="canonical" href={`https://kakki.dev/articles/${article.id}`} />
          <meta property="og:url" content={`https://kakki.dev/articles/${article.id}`} />
        </Helmet>
      )}
    </React.Fragment>
  );
};
