import React from 'react';
import Router from 'next/router';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Panel from '../components/atoms/Panel';
import Button from '../components/atoms/Button';
import Wrapper from '../components/organisms/Wrapper';
import Adfit from '../components/molecules/Adfit';

import reducerTest from '../reducers/reducerTest';

const StyledGoDetail = styled.a`
  font-size: 0.6em;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 2px 5px;
  user-select: none;
  cursor: pointer;
`;

export const Index: React.FC = () => {
  const { t } = useTranslation();
  const { testInfo } = reducerTest();

  const goGameClass = (newbie: boolean) => {
    const temp = testInfo.get;
    temp.newbie = newbie;
    testInfo.set(temp);
    Router.push('./test');
  };

  return (
    <Wrapper>
      <img
        src={'/logo.png'}
        alt={'LOSTARK LOGO'}
        style={{
          maxWidth: '380px',
          margin: '0 auto'
        }}
      />
      <Panel>
        <h2 className={'panel-title'}>
          {t('home.big5Test')} + {t('home.statClass')}
        </h2>
        <h3 className={'panel-sub-title'}>Big 5 테스트란?</h3>
        <div className={'panel-content'}>
          인간의 성격을 5가지 요인들로 설명하는 성격심리 모형.
          <br /> 학계에서 논의된 5요인 모형을 기반으로 한다.
          <br /> 성격심리학자들에게 신뢰를 받고 있는 검증된 이론이다.
          <br />
          <StyledGoDetail href={'https://namu.wiki/w/Big5'} title={'[나무위키] Big 5 테스트'} target={'_blank'}>
            자세히
          </StyledGoDetail>
        </div>
      </Panel>
      <Panel>
        <div className={'panel-text'}>
          <h3 className={'panel-sub-title'}>{t('home.checkNewbie')}</h3>
          <br />
          <Button primary={true} onClick={() => goGameClass(true)}>
            {t('home.yes')}
          </Button>
          <Button onClick={() => goGameClass(false)}>{t('home.no')}</Button>
        </div>
      </Panel>
      <Adfit />
    </Wrapper>
  );
};

export default Index;
