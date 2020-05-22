import * as React from 'react';
import { Theme } from "model";
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import { whiteTheme } from '../../../constants/themes';

export const Profile: React.FC = () => {
  // FIXME: cannot build when use Recoil
  // const theme = useRecoilValue<Theme>(getTheme);
  const theme: Theme = whiteTheme;

  return (
    <React.Fragment>
      <MainTemplate>
        <Header theme={theme}/>
      </MainTemplate>
    </React.Fragment>
  );
};
