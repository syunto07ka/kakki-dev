import * as React from 'react';
import styled from 'styled-components';
import { Article } from 'model';
import { Link } from 'react-router-dom';
import IconImage from 'images/profile.jpg';

interface Props {
  article: Article;
}

export const ArticlesRow: React.FC<Props> = ({ article }) => (
  <Wrapper>
    <Title to={`/articles/${article.id}`}>{article.id}. {article.title}</Title>
    <ContentWrapper>
      <Content>
        author: <Icon src={IconImage}/><Name>カッキー(@kakki09)</Name>
      </Content>
      <Date>created: {article.date}</Date>
    </ContentWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 24px 16px;
  border-bottom: 1px solid #d9d9d9;
`;

const Title = styled(Link)`
  font-weight: bold;
  font-size: 20px;
  color: #333333;
`;

const ContentWrapper = styled.div`
  margin-top: 24px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
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
