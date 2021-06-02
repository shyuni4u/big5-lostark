import React from 'react';
import Router from 'next/router';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Panel from '../components/atoms/Panel';
import Button from '../components/atoms/Button';
import Wrapper from '../components/organisms/Wrapper';
import Adfit from '../components/molecules/Adfit';

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

  const goGameClass = () => {
    Router.push('./gameclass');
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
      <div style={{ width: '100%', textAlign: 'center' }}>
        <div style={{ margin: '30px 0' }}>개인이 재미로 만든 것입니다. 질문은 12개 있습니다.</div>
        <Button primary onClick={() => goGameClass()}>
          {t('home.btnStart')}
        </Button>
      </div>
      <Adfit />
    </Wrapper>
  );
};

export default Index;
