import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Router from 'next/router'
import styled, { css } from 'styled-components'
import { useTranslation } from 'react-i18next'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/grid'
import { BsBarChart, BsCloud } from 'react-icons/bs'

import Theme from '../../styles/theme'
import GameClassInfo from '../../lib/GameClassInfo'
import API from '../../lib/info.json'

import Button from '../atoms/Button'
import Loader from '../atoms/Loader'

import { useSelector } from 'react-redux'
import { selectTest } from 'redux-slice/test'

const StyledLoadingWrapper = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`

const StyledResult = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      padding-bottom: 25px;
      border-bottom: 1px solid ${theme.colors.info};
    `
  }}
`
const StyledResultTitle = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      flex: 0 0 100%;
      color: ${theme.colors.info};
      font-weight: 600;
      margin-bottom: 10px;
      font-size: 16px;

      & > svg {
        margin-right: 4px;
        margin-bottom: -2px;
      }
    `
  }}
`
const StyledResultList = styled.ul`
  width: 100%;
  flex: 0 0 100%;
  & > li {
    width: 100%;
    display: flex;
    padding: 4px 0;
    justify-content: center;
  }
`

type hasUrlProps = {
  url?: string
  color?: string
  pos?: string
  image?: string
  imageHover?: string
}
const StyledResultListItems = styled.ul`
  ${({ theme }) => {
    return css`
      flex: 1 1 100%;
      display: flex;
      text-align: center;
      user-select: none;
      cursor: pointer;

      & > li {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      & > .image {
        flex: 0 0 64px;
      }
      & > .name {
        flex: 0 0 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      & > .progress {
        flex: 1 1 auto;
        padding: 4px;
        padding-right: 14px;
        display: flex;
        justify-content: flex-start;
        position: relative;
        & > div.progressBar {
          height: calc(100% - 36px);
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          & > div.progressValue {
            position: absolute;
            left: 10px;
            color: ${theme.colors.white};
            mix-blend-mode: difference;
          }
        }
      }
      & > .value {
        flex: 0 0 40px;
        text-align: right;
      }
    `
  }}
`
const StyledResultListItemImage = styled.div<hasUrlProps>`
  ${({ theme, url, color, pos, image, imageHover }) => {
    const _pos = pos.split(' ')
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
        ${pos === ''
          ? css`
              background: url(${image}) no-repeat 0 0;
            `
          : css`
              background: url(${url}) no-repeat 0 0;
              background-position: ${_pos[0]} ${_pos[1]};
              background-size: 1584px 1497px;
            `}
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
        ${pos === ''
          ? css`
              background: url(${imageHover}) no-repeat 0 0;
            `
          : css`
              background: url(${url}) no-repeat 0 0;
              background-position: ${_pos[2]} ${_pos[3]};
              background-size: 1584px 1497px;
            `}
        font-size: 0;
        transition: 0.5s;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        opacity: 1;
      }
    `
  }}
`

const StyledYouLi = styled.li`
  padding: 4px 0;
  & > span {
    font-weight: 600;
  }
`

const TOKEN = '!?!'

type mlProp = {
  sC: string //  class
  sT: string //  talent
  sI?: string //  input
  sR?: string //  result
}
type resultNNProp = {
  label: string
  confidence: number
}

const FOR_TRAINING = false

export const Result: React.FC = () => {
  const { t, i18n } = useTranslation()
  const test = useSelector(selectTest)
  const [resultML, setResultML] = useState<mlProp[]>([])
  const [resultNN, setResultNN] = useState<resultNNProp[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const [agree, setAgree] = useState<number>(1)
  const [consc, setConsc] = useState<number>(1)
  const [extra, setExtra] = useState<number>(1)
  const [openn, setOpenn] = useState<number>(1)
  const [neuro, setNeuro] = useState<number>(1)

  const [nn, setNN] = useState<any>(undefined)

  let ml5: any = null

  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const parseRange = (val: number) => {
    if (val >= 1 && val < 3) return 1
    if (val == 3) return 3
    if (val > 3 && val <= 5) return 5
    return 0
  }

  useEffect(() => {
    i18n.changeLanguage(window.localStorage.getItem('lang') || 'en')

    const param = Router.query.param
    if (param) {
      setAgree(parseInt((param as string).slice(0, 1), 10))
      setConsc(parseInt((param as string).slice(1, 2), 10))
      setExtra(parseInt((param as string).slice(2, 3), 10))
      setOpenn(parseInt((param as string).slice(3, 4), 10))
      setNeuro(parseInt((param as string).slice(4, 5), 10))
    } else {
      setAgree(parseRange(test.agreeablenessScore / test.agreeablenessCount))
      setConsc(parseRange(test.conscientiousnessScore / test.conscientiousnessCount))
      setExtra(parseRange(test.extraversionScore / test.extraversionCount))
      setOpenn(parseRange(test.opennessToExperienceScore / test.opennessToExperienceCount))
      setNeuro(parseRange(test.neuroticismScore / test.neuroticismCount))
    }

    const onLoadApi = async () => {
      await axios
        .post(API.path, null, {
          params: {
            bTraining: FOR_TRAINING ? 'true' : undefined,
            sFirstClass: test.firstClass,
            sFirstTalent: test.firstTalent,
            sSecondClass: test.secondClass,
            sSecondTalent: test.secondTalent,
            sThirdClass: test.thirdClass,
            sThirdTalent: test.thirdTalent,
            sInput: test.inputValues.join(''),
            nAgreeableness: agree,
            nConscientiousness: consc,
            nExtraversion: extra,
            nOpennessToExperience: openn,
            nNeuroticism: neuro
          }
        })
        .then((response) => {
          if (response.status === 200) {
            if (FOR_TRAINING) setResultML(response.data.ml)
          }
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => setLoading(false))
    }

    onLoadApi()
  }, [])

  useEffect(() => {
    if (window && ml5 === null && resultML.length > 0) {
      ml5 = require('ml5')

      const options = {
        task: 'classification',
        debug: FOR_TRAINING
      }

      const _nn = ml5.neuralNetwork(options)

      const trainingOptions = {
        epochs: 100,
        batchSize: 50
      }

      const finishedTraining = () => {
        classify()
      }

      const classify = () => {
        const input = {
          v00: agree * 20,
          v01: consc * 20,
          v02: extra * 20,
          v03: openn * 20,
          v04: neuro * 20
        }
        _nn.classify(input, handleResults)
      }

      const handleResults = (error, result) => {
        if (error) {
          console.error(error)
          return
        }
        setResultNN(result)
      }

      resultML.forEach((el: mlProp) => {
        const _val = el.sR.split('')
        const inputs = {
          v00: parseInt(_val[0], 10) * 20,
          v01: parseInt(_val[1], 10) * 20,
          v02: parseInt(_val[2], 10) * 20,
          v03: parseInt(_val[3], 10) * 20,
          v04: parseInt(_val[4], 10) * 20
        }
        const output = {
          sClass: `${el.sC}${TOKEN}${el.sT}`
        }

        _nn.addData(inputs, output)
      })

      _nn.normalizeData()
      _nn.train(trainingOptions, finishedTraining)
      setNN(_nn)
    } else if (window && ml5 === null) {
      ml5 = require('ml5')

      const options = {
        task: 'classification',
        debug: false
      }

      let _nn = ml5.neuralNetwork(options)

      const modelDetails = {
        model: '/model/model.json',
        metadata: '/model/model_meta.json',
        weights: '/model/model.weights.bin'
      }

      const modelReady = () => {
        classfy()
      }

      _nn.load(modelDetails, modelReady)

      const classfy = () => {
        const input = {
          v00: agree * 20,
          v01: consc * 20,
          v02: extra * 20,
          v03: openn * 20,
          v04: neuro * 20
        }
        _nn.classify(input, handleResults)
      }

      const handleResults = (error, result) => {
        if (error) {
          console.error(error)
          return
        }
        setResultNN(result)
      }
    }
  }, [agree, consc, extra, openn, neuro, resultML])

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
      },
      radar: {
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
    }
  }

  return (
    <>
      <StyledLoadingWrapper style={{ display: loading ? 'inherit' : 'none' }}>
        <Loader style={{ marginBottom: '20px' }} />
        {t('result.loading')}
      </StyledLoadingWrapper>

      <div style={{ display: loading ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', padding: '6px' }}>
        <StyledResult>
          <StyledResultTitle>
            <BsBarChart />
            {t('result.you')}
          </StyledResultTitle>
          <ReactEChartsCore
            echarts={echarts}
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
          <StyledResultTitle>
            <BsCloud />
            {t('result.machinelearning')}
          </StyledResultTitle>
          <StyledResultList>
            {resultNN.length === 0 && (
              <>
                <li>
                  <Loader style={{ marginBottom: '20px' }} />
                </li>
                <li>{t('result.training')}</li>
              </>
            )}
            {resultNN.map((el: resultNNProp, elIdx: number) => {
              if (elIdx > 4) return undefined
              const _el = el.label.split(TOKEN)
              const _class = GameClassInfo.find((v) => v.name == _el[0])
              const _talent = _class.talents.find((v) => v.name == _el[1])

              return (
                <li key={elIdx}>
                  <StyledResultListItems>
                    <li className={'image'}>
                      <StyledResultListItemImage
                        url={'https://i.ibb.co/8NHpM1C/sprite-information.png'}
                        pos={_talent.image}
                        image={_talent.prevImage}
                        imageHover={_talent.prevImageHover}
                      ></StyledResultListItemImage>
                    </li>
                    <li className={'name'}>{t(`gameclass.${_talent.name}`)}</li>
                    <li className={'progress'}>
                      <div className={'progressBar'} style={{ width: Math.round((el.confidence / resultNN[0].confidence) * 100) + '%', backgroundColor: _class.color }}>
                        <div className={'progressValue'}>{Math.round(el.confidence * 10000) / 100}</div>
                      </div>
                    </li>
                  </StyledResultListItems>
                </li>
              )
            })}
          </StyledResultList>
        </StyledResult>

        <div style={{ margin: '10px 0' }}>
          {t('result.warning')}
          <br />
          <br />
          {t('result.thankyou')}
        </div>
        <Button primary onClick={() => Router.push('/')}>
          {t('result.retry')}
        </Button>
        <Button primary onClick={() => Router.push({ pathname: 'http://wow.enzo.kr/result', query: { param: [agree, consc, extra, openn, neuro].join('') } })}>
          {t('result.gowow')}
        </Button>
        {FOR_TRAINING ? (
          <Button primary onClick={() => nn.save()}>
            SAVE
          </Button>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default Result
