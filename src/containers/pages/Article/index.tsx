import * as React from 'react';
import { Article, Store } from "model";
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import { Link } from 'react-router-dom';
import { articles } from 'repositories/articles';
import './style.module.scss';
import { IconName } from 'components/atoms/IconName';

interface Props {
  store: Store
}

export const ArticlePage: React.FC<Props> = ({ store }) => {
  // FIXME: cannot build when use Recoil
  // const article = useRecoilValue<Article>(getArticle);
  // const theme = useRecoilValue<Theme>(getTheme);
  const article: Article = articles[0];
  const Description: React.FC = article.description;

  store.setActiveTab('blog');

  return (
    <React.Fragment>
      <MainTemplate>
        <Header activeTab={store.activeTab} />
        <div styleName="content-wrapper">
          <div styleName="title">{article.id}. {article.title}</div>
          <div styleName="description-wrapper">
            <Description />
          </div>
          <div styleName="content">
            author: <IconName />
          </div>
          <div styleName="date">created: {article.date}</div>
          <Link styleName="back-link" to="/">ブログ一覧に戻る</Link>
        </div>
      </MainTemplate>
    </React.Fragment>
  );
};
