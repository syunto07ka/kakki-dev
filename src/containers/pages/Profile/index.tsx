import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { getTheme } from 'states/selectors/getTheme';
import { Theme } from "model";
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';

export const Profile: React.FC = () => {
  const theme = useRecoilValue<Theme>(getTheme);

  return (
    <React.Fragment>
      <MainTemplate>
        <Header theme={theme}/>
      </MainTemplate>
    </React.Fragment>
  );
};
