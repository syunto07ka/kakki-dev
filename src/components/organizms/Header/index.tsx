import * as React from 'react';
import styled from 'styled-components';
import { Theme } from 'model';
import { Navigation } from 'components/molecules/Navigation';
import { Link } from 'react-router-dom';

interface Props {
  theme: Theme
}

export const Header: React.FC<Props> = () => (
  <Wrapper>
    <Title to="/">kakki-dev</Title>
    <Navigation isActive={true}/>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-top: 32px;
`;

const Title = styled(Link)`
  color: #333333;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  display: block;
  text-decoration: none;
`;
