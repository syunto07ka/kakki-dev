import * as React from 'react';
import { Article, Theme } from "model";
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import styled from 'styled-components';
import IconImage from 'images/profile.jpg';
import { Link } from 'react-router-dom';
import { articles } from 'repositories/articles';
import { whiteTheme } from 'constants/themes';

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
        <ContentWrapper>
          <Title>{article.id}. {article.title}</Title>
          <DescriptionWrapper>
            <Description />
          </DescriptionWrapper>
          <Content>
            author: <Icon key="article-page" src={IconImage}/><Name>カッキー(@kakki09)</Name>
          </Content>
          <Date>created: {article.date}</Date>
          <BackLink to="/">ブログ一覧に戻る</BackLink>
        </ContentWrapper>
      </MainTemplate>
    </React.Fragment>
  );
};

const ContentWrapper = styled.div`
  margin-top: 16px;
  padding: 0 16px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #333333;
  padding-bottom: 16px;
  border-bottom: 1px solid #d9d9d9;
`

const DescriptionWrapper = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #d9d9d9;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 20px;
  margin-left: 16px;
  border: 2px solid #f06060;
`;

const Name = styled.div`
  margin-left: 8px;
  color: #333333;
`;

const Date = styled.div`
  margin-top: 8px;
`;

const BackLink = styled(Link)`
  display: block;
  text-align: center;
  color: #333333;
  margin: 24px 0;
`;
