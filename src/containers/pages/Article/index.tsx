import * as React from 'react';
import { Article, Store } from "model";
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import { Link } from 'react-router-dom';
import { articles } from 'repositories/articles';
import './style.module.scss';
import { IconName } from 'components/atoms/IconName';
import { ContentWrapper } from 'components/organizms/ContentWrapper';
import { SectionWrapper } from 'components/organizms/SectionWrapper';

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
        <ContentWrapper>
          <SectionWrapper title={article.id + '. ' + article.title}>
            <div styleName="description-wrapper">
              <Description />
            </div>
            <div styleName="info-wrapper">
              <div styleName="icon-name"><IconName /></div>
              <div styleName="date">{article.date}</div>
            </div>
          </SectionWrapper>
          <Link styleName="back-link" to="/">ブログ一覧に戻る</Link>
        </ContentWrapper>
      </MainTemplate>
    </React.Fragment>
  );
};
