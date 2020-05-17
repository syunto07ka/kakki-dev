import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  isActive: boolean
}

export const Navigation: React.FC<Props> = () => (
  <Wrapper>
    <Nav to="/">Blog</Nav>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const Nav = styled(Link)`
  width: 160px;
  padding: 8px 16px;
  text-align: center;
  color: #333333;
  text-decoration: none;
  border-bottom: 1px solid #d9d9d9;
`;

// opacity: ${() => props.isActive ? 1 : 0.7};
