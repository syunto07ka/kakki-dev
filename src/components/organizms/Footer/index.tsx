import * as React from 'react';
import styled from 'styled-components';

export const Footer: React.FC = () => (
  <Wrapper>
    <Text>@kakki-dev</Text>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid #333333;
  background-color: #fff;
  margin-top: 32px;
`;

const Text = styled.div``;
