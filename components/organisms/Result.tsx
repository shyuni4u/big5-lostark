import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import ReactEcharts from 'echarts-for-react';
import Theme from '../../styles/theme';
import GameClassInfo from '../../lib/GameClassInfo';
import API from '../../lib/info.json';

// {
//   "path": "https://jxq2fc4j8h.execute-api.ap-northeast-2.amazonaws.com/default/lostarkResult"
// }

import Button from '../atoms/Button';
import Loader from '../atoms/Loader';
import Adfit from '../molecules/Adfit';

import reducerTest from '../../reducers/reducerTest';

const StyledResult = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
const StyledResultTitle = styled.div`
  width: 100%;
  flex: 0 0 100%;
  font-weight: 600;
  margin-bottom: 10px;
`;
const StyledResultList = styled.ul`
  width: 100%;
  flex: 0 0 100%;
  & > li {
    width: 100%;
    display: flex;
    padding: 4px 0;
    justify-content: center;
  }
`;

type hasUrlProps = {
  url?: string;
  color?: string;
  pos?: string;
};
const StyledResultListItems = styled.ul`
  ${({ theme }) => {
    return css`
      flex: 1 1 100%;
      display: flex;
      text-align: center;
      user-select: none;
      cursor: pointer;

      & > .image {
        flex: 0 0 64px;
      }
      & > .name {
        flex: 0 0 100px;
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      & > .progress {
        flex: 1 1 auto;
        padding: 4px;
        padding-left: 20px;
        display: flex;
        & > div.progressBar {
          height: calc(100% - 36px);
          border-radius: 4px;
        }
      }
      & > .value {
        flex: 0 0 40px;
        text-align: right;
      }
    `;
  }}
`;
const StyledResultListItemImage = styled.div<hasUrlProps>`
  ${({ theme, url, color, pos }) => {
    const _pos = pos.split(' ');
    return css`
      flex: 0 0 67px;
      display: block;
      position: relative;
      margin: 0 -2px;
      padding-top: 80px;
      box-sizing: border-box;
      text-align: center;
      font-size: 15px;
      color: #a3b0c1;
      background-color: transparent;
      text-decoration: none;

      &::before {
        width: 67px;
        height: 75px;
        display: inline-block;
        background: url(${url}) no-repeat 0 0;
        background-position: ${_pos[0]} ${_pos[1]};
        background-size: 1584px 1497px;
        font-size: 0;
        transition: 0.5s;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        opacity: 1;
      }
      &::after {
        width: 67px;
        height: 75px;
        display: inline-block;
        background: url(${url}) no-repeat 0 0;
        background-position: ${_pos[2]} ${_pos[3]};
        background-size: 1584px 1497px;
        font-size: 0;
        transition: 0.5s;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        opacity: 1;
      }
    `;
  }}
`;
const StyledResultListItemContent = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      & > .name {
        color: ${colors.hover};
      }
    `;
  }}
`;

const StyledYouLi = styled.li`
  padding: 4px 0;
  & > span {
    font-weight: 600;
  }
`;

type testResult = {
  sClass: string;
  sTalent: string;
  nCount: number;
};
export const Result: React.FC = () => {
  const { t } = useTranslation();
  const { testInfo } = reducerTest();
  const [result, setResult] = useState<testResult[]>([]);

  const [agree, setAgree] = useState<number>(1);
  const [consc, setConsc] = useState<number>(1);
  const [extra, setExtra] = useState<number>(1);
  const [openn, setOpenn] = useState<number>(1);
  const [neuro, setNeuro] = useState<number>(1);

  const [sum, setSum] = useState<number>(0);
  const [more, setMore] = useState<boolean>(false);

  const parseRange = (val: number) => {
    if (val >= 1 && val < 3) return 1;
    if (val == 3) return 3;
    if (val > 3 && val <= 5) return 5;
    return 0;
  };

  useEffect(() => {
    let unmount = false;

    const onLoadApi = async () => {
      if (testInfo.get.firstClass !== '') {
        const _agree = parseRange(testInfo.get.agreeablenessScore / testInfo.get.agreeablenessCount);
        const _consc = parseRange(testInfo.get.conscientiousnessScore / testInfo.get.conscientiousnessCount);
        const _extra = parseRange(testInfo.get.extraversionScore / testInfo.get.extraversionCount);
        const _openn = parseRange(testInfo.get.opennessToExperienceScore / testInfo.get.opennessToExperienceCount);
        const _neuro = parseRange(testInfo.get.neuroticismScore / testInfo.get.neuroticismCount);

        await axios
          .post(API.path, null, {
            params: {
              sFirstClass: testInfo.get.firstClass,
              sFirstTalent: testInfo.get.firstTalent,
              sSecondClass: testInfo.get.secondClass,
              sSecondTalent: testInfo.get.secondTalent,
              sThirdClass: testInfo.get.thirdClass,
              sThirdTalent: testInfo.get.thirdTalent,
              nAgreeableness: _agree,
              nConscientiousness: _consc,
              nExtraversion: _extra,
              nOpennessToExperience: _openn,
              nNeuroticism: _neuro
            }
          })
          .then((response) => {
            if (unmount) return;
            if (response.status === 200) {
              setResult(response.data);
            } else {
              setResult(undefined);
            }
          })
          .catch((error) => {
            if (unmount) return;
            console.error(error);
          })
          .finally(() => {
            setAgree(_agree);
            setConsc(_consc);
            setExtra(_extra);
            setOpenn(_openn);
            setNeuro(_neuro);
          });
      }
    };

    // onLoadApi();
    const dummy = [
      { sClass: 'magician', sTalent: 'arcana', nCount: 2 },
      { sClass: 'magician', sTalent: 'summoner', nCount: 2 },
      { sClass: 'magician', sTalent: 'bard', nCount: 2 }
    ];
    setResult(dummy);

    return () => {
      unmount = true;
    };
  }, []);

  useEffect(() => {
    let _sum = 0;
    result.forEach((el) => (_sum += el.nCount));
    if (_sum === 0) _sum = 1;
    setSum(_sum);
  }, [result]);

  const getOption = () => {
    return {
      title: {
        text: t('result.title'),
        show: false
      },
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
        // show: true,
        // borderColor: _color,
        // borderWidth: '2'
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: t('result.agreeableness'), max: 5 },
          { name: t('result.conscientiousness'), max: 5 },
          { name: t('result.extraversion'), max: 5 },
          { name: t('result.opennessToExperience'), max: 5 },
          { name: t('result.neuroticism'), max: 5 }
        ],
        splitNumber: 5,
        splitArea: {
          areaStyle: {
            color: ['#3f3c54', '#373652'],
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 10
          }
        },
        axisLine: {
          lineStyle: {
            color: Theme.colors.white,
            opacity: 0.4
          }
        },
        splitLine: {
          lineStyle: {
            color: Theme.colors.white,
            opacity: 0.4
          }
        }
      },
      color: ['#7cffb2'],
      series: [
        {
          name: 'Big 5 test.',
          type: 'radar',
          symbolSize: 10,
          lineStyle: {
            width: 4
          },
          data: [
            {
              value: [agree, consc, extra, openn, neuro],
              name: 'You.'
            }
          ]
        }
      ]
    };
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '6px' }}>
      {/* {testInfo.get.firstClass === '' && (
        <>
          <Button onClick={() => Router.push('/')}>다시하기</Button>
          성향 정보가 없습니다. 다시 테스트해주세요.
        </>
      )}
      {testInfo.get.firstClass !== '' && result.length === 0 && (
        <>
          <Loader style={{ marginBottom: '20px' }} />
          성향과 비슷한 직업을 찾고 있습니다.
        </>
      )} */}
      {/* {testInfo.get.firstClass !== '' && result.length > 0 && ( */}
      {result.length > 0 && (
        <>
          <StyledResult>
            <StyledResultTitle>{t('result.you')}</StyledResultTitle>
            <ReactEcharts
              option={getOption()}
              notMerge={true}
              lazyUpdate={true}
              style={{
                height: '360px',
                width: '360px',
                position: 'relative'
              }}
            />
          </StyledResult>
          <StyledResult>
            <ul>
              <StyledYouLi>
                <span style={{ color: '#ffd50e' }}>{t('result.agreeableness')}: </span>
                {t('result.agreeablenessDesc')}
              </StyledYouLi>
              <StyledYouLi>
                <span style={{ color: '#ffa53a' }}>{t('result.conscientiousness')}: </span>
                {t('result.conscientiousnessDesc')}
              </StyledYouLi>
              <StyledYouLi>
                <span style={{ color: '#89dd26' }}>{t('result.extraversion')}: </span>
                {t('result.extraversionDesc')}
              </StyledYouLi>
              <StyledYouLi>
                <span style={{ color: '#e980ff' }}>{t('result.opennessToExperience')}: </span>
                {t('result.opennessToExperienceDesc')}
              </StyledYouLi>
              <StyledYouLi>
                <span style={{ color: '#36b1ff' }}>{t('result.neuroticism')}: </span>
                {t('result.neuroticismDesc')}
              </StyledYouLi>
            </ul>
          </StyledResult>
          <StyledResult>
            <StyledResultTitle>{t('result.likeyou')}</StyledResultTitle>
            <StyledResultList>
              {result.map((el: testResult, elIdx: number) => {
                if (!more && elIdx > 4) return undefined;

                const _class = GameClassInfo.find((v) => v.name == el.sClass);
                const _talent = _class.talents.find((v) => v.name == el.sTalent);

                return (
                  <li key={elIdx}>
                    <StyledResultListItems>
                      <li className={'image'}>
                        <StyledResultListItemImage url={'/sprite_information.png'} pos={_talent.image}></StyledResultListItemImage>
                      </li>
                      <li className={'name'}>{t(`gameclass.${_talent.name}`)}</li>
                      <li className={'progress'}>
                        <li className={'progressBar'} style={{ width: Math.round((el.nCount / sum) * 10000) / 100 + '%', backgroundColor: _class.color }}></li>
                      </li>
                      <li className={'value'}>{Math.round((el.nCount / sum) * 10000) / 100}%</li>
                    </StyledResultListItems>
                  </li>
                );
              })}
              {result.length > 5 && !more && (
                <li>
                  <Button onClick={() => setMore(true)}>{t('result.more')}</Button>
                </li>
              )}
            </StyledResultList>
          </StyledResult>
          <Button primary onClick={() => Router.push('/')}>
            {t('result.retry')}
          </Button>
        </>
      )}
      <div style={{ height: '10px' }}></div>
      <Adfit />
    </div>
  );
};

export default Result;
