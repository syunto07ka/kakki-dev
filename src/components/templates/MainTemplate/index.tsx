import * as React from 'react';
import styled from 'styled-components';

export const MainTemplate: React.FC = ({ children }) => (
  <Template>{children}</Template>
);

const Template = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 16px;
`;
