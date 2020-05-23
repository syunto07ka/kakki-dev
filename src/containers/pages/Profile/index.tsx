import * as React from 'react';
import { Store } from "model";
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import { IconName } from 'components/atoms/IconName';

interface Props {
  store: Store
}

export const Profile: React.FC<Props> = ({ store }) => {
  // FIXME: cannot build when use Recoil
  // const theme = useRecoilValue<Theme>(getTheme);
  store.setActiveTab('profile');

  return (
    <React.Fragment>
      <MainTemplate>
        <Header activeTab={store.activeTab} />
        <div><IconName /></div>
      </MainTemplate>
    </React.Fragment>
  );
};
