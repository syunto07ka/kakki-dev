import * as React from 'react';
import { Article, Store } from "model";
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import { Link, useParams, Redirect } from 'react-router-dom';
import { articles } from 'constants/articles';
import './style.module.scss';
import { IconName } from 'components/atoms/IconName';
import { ContentWrapper } from 'components/organizms/ContentWrapper';
import { ArticleWrapper } from 'components/organizms/ArticleWrapper';

interface Props {
  store: Store
}

export const ArticlePage: React.FC<Props> = ({ store }) => {
  // FIXME: cannot build when use Recoil
  // const article = useRecoilValue<Article>(getArticle);
  // const theme = useRecoilValue<Theme>(getTheme);

  // React.useEffect(() => {
  //   store.setActiveTab('blog');
  //   console.log('ああああ');
  // });

  const { articleId } = useParams();
  const article: Article | undefined = articles.find(article => article.id === Number(articleId));
  if (article === undefined) {
    return <Redirect to="/" />;
  }
  const Description: React.FC = article.description;

  return (
    <React.Fragment>
      <MainTemplate>
        <Header activeTab={store.activeTab} />
        <ContentWrapper>
          <ArticleWrapper title={article.id + '. ' + article.title}>
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
      </MainTemplate>
    </React.Fragment>
  );
};
