import * as React from 'react';
import { Article } from "model";
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import { Link, useParams, Redirect } from 'react-router-dom';
import { articles } from 'constants/articles';
import './style.module.scss';
import { IconName } from 'components/atoms/IconName';
import { ContentWrapper } from 'components/organizms/ContentWrapper';
import { ArticleWrapper } from 'components/organizms/ArticleWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from 'redux/store';
import { changeTab } from 'redux/slices/activeTab';
import { Footer } from 'components/organizms/Footer';

export const ArticlePage: React.FC = () => {
  const { articleId } = useParams();
  const dispatch = useDispatch();
  const activeTab = useSelector((state: rootState) => state.activeTab.value);

  React.useEffect(() => {
    dispatch(changeTab('blog'));
  }, [dispatch]);

  const article = React.useMemo(() => {
    const article: Article | undefined = articles.find(article => article.id === Number(articleId));
    return article;
  }, [articleId]);

  if (article === undefined) {
    return <Redirect to="/" />;
  }

  const title = article.id + '. ' + article.title;
  const Description: React.FC = article.description;

  return (
    <React.Fragment>
      <MainTemplate>
        <Header activeTab={activeTab} />
        <ContentWrapper>
          <ArticleWrapper title={title}>
            <div styleName="description-wrapper">
              <Description />
            </div>
            <div styleName="info-wrapper">
              <div styleName="icon-name"><IconName /></div>
              <div styleName="date">{article.date}</div>
            </div>
          </ArticleWrapper>
          <Link styleName="back-link" to="/">ブログ一覧に戻る</Link>
        </ContentWrapper>
        <Footer />
      </MainTemplate>
    </React.Fragment>
  );
};
