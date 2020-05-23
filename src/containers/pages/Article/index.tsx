import * as React from 'react';
import { Article, Theme } from "model";
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import { Link } from 'react-router-dom';
import { articles } from 'repositories/articles';
import { whiteTheme } from 'constants/themes';
import './style.module.scss';
import { IconName } from 'components/atoms/IconName';

export const ArticlePage: React.FC = () => {
  // FIXME: cannot build when use Recoil
  // const article = useRecoilValue<Article>(getArticle);
  // const theme = useRecoilValue<Theme>(getTheme);
  const article: Article = articles[0];
  const theme: Theme = whiteTheme;
  const Description: React.FC = article.description;

  return (
    <React.Fragment>
      <MainTemplate>
        <Header theme={theme}/>
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
