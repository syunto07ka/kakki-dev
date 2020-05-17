import * as React from 'react';
import styled from 'styled-components';
import { Theme } from 'model';
import { Navigation } from 'components/molecules/Navigation';

interface Props {
  theme: Theme
}

export const Header: React.FC<Props> = () => (
  <Wrapper>
    <Title>kakki-dev</Title>
    <Navigation isActive={true}/>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 32px 0;
`;

const Title = styled.div(props => `
  color: ${props.theme.base};
  text-align: center;
  font-size: 48px;
  font-weight: bold;
`);
