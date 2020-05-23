import * as React from 'react';
import { Store } from "model";
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import './style.module.scss';
import { ContentWrapper } from 'components/organizms/ContentWrapper';
import { SectionWrapper } from 'components/organizms/SectionWrapper';
import { ProfileIcon } from 'components/atoms/ProfileIcon';

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
        <ContentWrapper>
          <SectionWrapper title="基本プロフィール">
            <div styleName="profile-icon-wrapper">
              <ProfileIcon />
            </div>
            <ul styleName="lists-profile">
              <li styleName="list-name">垣井 駿努(かきい しゅんと)</li>
              <li styleName="list-birthday">1999年3月10日</li>
              <li styleName="list-from">広島県</li>
              <li styleName="list-job">エンジニア</li>
            </ul>
          </SectionWrapper>
        </ContentWrapper>
      </MainTemplate>
    </React.Fragment>
  );
};
