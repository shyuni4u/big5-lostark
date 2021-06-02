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
    Router.push('./gameclass');
  };
  return (
    <Wrapper>
      <img
        src={'/logo-wow-small.png'}
        alt={'WOW LOGO'}
        style={{
          width: '40px',
          height: '40px',
          margin: '10px auto'
        }}
      />
      <Panel>
        <h3 className={'panel-sub-title'}>WoW 직업 선택</h3>
        <h2 className={'panel-title'}>Big 5 테스트란?</h2>
        <div className={'panel-text'}>
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
        <img
          src={'/logo-wow.png'}
          alt={'WOW LOGO'}
          style={{
            maxWidth: '380px',
            margin: '0 auto'
          }}
        />
        <div className={'panel-text'}>
          <h3 className={'panel-sub-title'}>월드오브워크래프트를 플레이해보신 적이 있습니까?</h3>
          <br />
          <Button primary={true} onClick={() => goGameClass(true)}>
            예
          </Button>
          <Button onClick={() => goGameClass(false)}>아니요</Button>
        </div>
      </Panel>
      <Adfit />
    </Wrapper>
  );
};

export default Index;
