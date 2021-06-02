import React from 'react';
import styled from 'styled-components';

import Panel from '../atoms/Panel';

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  width: 100%;
  text-align: center;
  margin: 20px 0;
`;
const StyledGoDetail = styled.a`
  font-size: 0.6em;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 2px 5px;
  user-select: none;
  cursor: pointer;
`;

export const Intro: React.FC = () => {
  return (
    <>
      <StyledTitle>Big 5 테스트</StyledTitle>
      <Panel>
        <h3 className={'panel-sub-title'}>WoW 직업 선택</h3>
        <h2 className={'panel-title'}>Big 5 테스트란?</h2>
        <div className={'panel-text'}>
          인간의 성격을 5가지의 상호 독립적인 요인들로 설명하는 성격심리학적
          모형.
          <br /> 학계에서 논의된 5요인 모형을 기반으로 한다.
          <br /> 대중에게는 그다지 알려지지 않은 모형이지만 전세계의
          성격심리학자들에게 엄청난 신뢰를 받고 있는 검증된 이론이다.
          <br />
          <StyledGoDetail
            href={'https://namu.wiki/w/Big5'}
            title={'[나무위키] Big 5 테스트'}
            target={'_blank'}
          >
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
          <button type="button">예</button>
          <button type="button">아니요</button>
        </div>
      </Panel>
    </>
  );
};

export default Intro;
