import * as React from 'react';
import { Header } from 'components/organizms/Header';
import { MainTemplate } from 'components/templates/MainTemplate';
import './style.module.scss';
import { ContentWrapper } from 'components/organizms/ContentWrapper';
import { SectionWrapper } from 'components/organizms/SectionWrapper';
import { ProfileIcon } from 'components/atoms/ProfileIcon';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from 'redux/store';
import { changeTab } from 'redux/slices/activeTab';
import { Footer } from 'components/organizms/Footer';

export const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: rootState) => state.activeTab.value);

  React.useEffect(() => {
    dispatch(changeTab('profile'));
  }, [dispatch]);

  return (
    <React.Fragment>
      <MainTemplate>
        <Header activeTab={activeTab} />
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
          <SectionWrapper title="経歴">
            <div>
              ただいま準備中です。<br />
              しばらくお待ち下さいmm
            </div>
          </SectionWrapper>
        </ContentWrapper>
        <Footer />
      </MainTemplate>
    </React.Fragment>
  );
};
