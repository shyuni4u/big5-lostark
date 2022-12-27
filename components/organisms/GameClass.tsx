import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import styled, { css } from 'styled-components'
import { useTranslation } from 'react-i18next'

import { toast } from 'react-toastify'

import Panel from '@components/atoms/Panel'
import Button from '@components/atoms/Button'
import Modal from '@components/atoms/Modal'

import { useDispatch, useSelector } from 'react-redux'
import { set, selectTest } from 'redux-slice/test'

import GameClassList, { GameClassItemInfo, ParamGameClassInfo } from '@lib/GameClassInfo'

type hasUrlProps = {
  url?: string
  color?: string
  pos?: string
  image?: string
  imageHover?: string
}
const StyledGameClassItemWrapper = styled.div`
  flex: 0 1 100%;
  border-bottom: 1px solid white;
  &:last-child {
    border-bottom: 0;
  }
`
const StyledGameClassItem = styled.div<hasUrlProps>`
  ${({ theme, url, color }) => {
    return css`
      position: relative;
      display: flex;
      align-items: center;
      height: 150px;
      margin: 15px 0;
      background: url(${url}) no-repeat 50% 50%;
      background-position: 0px -70px;
      background-size: cover;
      color: ${color};

      user-select: none;
      cursor: pointer;
      & > span {
        position: absolute;
        top: 4px;
        left: 4px;
        font-size: ${({ theme }) => theme.fontSizes.h3};
        font-weight: 600;
      }
    `
  }}
`
const StyledGameClassItemBackground = styled.div<hasUrlProps>`
  ${({ theme, url, color }) => {
    return css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(${url}) no-repeat 50% 50%;
      background-position: 0px -70px;
      background-size: cover;
      z-index: -1;
    `
  }}
`
const StyledGameClassTalents = styled.ul`
  ${({ theme }) => {
    return css`
      background-color: rgba(53, 32, 17, 0.8);
      border: 1px solid ${theme.colors.grayA};
      box-shadow: inset 0 -4px 0 ${theme.colors.grayE};
      padding: 20px;
      margin-top: 20px;
      display: flex;
      user-select: none;
      cursor: pointer;

      &:hover {
        background-color: #9e661c;
      }
    `
  }}
`
const StyledGameClassTalentImage = styled.li<hasUrlProps>`
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
const StyledGameClassTalentContent = styled.li`
  ${({ theme }) => {
    const { colors } = theme
    return css`
      padding-left: 10px;
      & > .name {
        color: ${colors.hover};
      }
      & > .desc {
      }
    `
  }}
`

const StyledGameClassTalentsSelected = styled.ul`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      width: 64px;
      height: 100px;
      user-select: none;
      cursor: pointer;
    `
  }}
`
const StyledGameClassTalentImageSelected = styled.li<hasUrlProps>`
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

      & > div.close {
        position: absolute;
        top: 2px;
        right: -4px;
        width: 20px;
        height: 20px;
        color: #fff;
        border: 1px solid #fff;
        background-color: red;
        font-weight: 600;
        border-radius: 4px;
      }

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
const StyledGameClassTalentContentSelected = styled.li`
  ${({ theme }) => {
    const { colors } = theme
    return css`
      & > .name {
        color: ${colors.hover};
      }
    `
  }}
`

const StyledSelectedGameClassList = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-around;
`
const StyledSelectedGameClassListEmpty = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  height: 40px;
  line-height: 40px;
  overflow: hidden;
`

const MAX_SELECT = 3

export const GameClass: React.FC = () => {
  const { t, i18n } = useTranslation()

  const dispatch = useDispatch()
  const test = useSelector(selectTest)

  const [itemInfo, setItemInfo] = useState<GameClassItemInfo>(undefined)
  const [selectedGameClass, setSelectedGameClass] = useState<ParamGameClassInfo[]>([])
  const [showTalent, setShowTalent] = useState<boolean>(false)

  useEffect(() => {
    i18n.changeLanguage(window.localStorage.getItem('lang') || 'en')
  }, [])

  const selectGameClass = (gameClass: any, talent: any) => {
    if (selectedGameClass.some((el) => el.name === gameClass.name && el.talentName === talent.name)) {
      //  Do nothing.
    } else if (selectedGameClass.length === MAX_SELECT) {
      toast.error(t('gameclass.maxSelectText', { max: MAX_SELECT }), {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
      })
    } else {
      const temp: ParamGameClassInfo = {
        name: gameClass.name,
        color: gameClass.color,
        talentName: talent.name,
        talentPosition: talent.position,
        talentImage: talent.image,
        talentDesc: talent.desc,
        prevImage: talent.prevImage,
        prevImageHover: talent.prevImageHover
      }
      setSelectedGameClass((old) => [...old, temp])
    }
    setShowTalent(false)
  }

  const unselectGameClass = (item: ParamGameClassInfo) => {
    setSelectedGameClass(selectedGameClass.filter((el) => !(el.name === item.name && el.talentName === item.talentName)))
  }

  const goTest = () => {
    const temp = {
      firstClass: '',
      firstTalent: '',
      secondClass: '',
      secondTalent: '',
      thirdClass: '',
      thirdTalent: ''
    }
    if (selectedGameClass.length > 2) {
      temp.thirdClass = selectedGameClass[2].name
      temp.thirdTalent = selectedGameClass[2].talentName
    }
    if (selectedGameClass.length > 1) {
      temp.secondClass = selectedGameClass[1].name
      temp.secondTalent = selectedGameClass[1].talentName
    }
    if (selectedGameClass.length > 0) {
      temp.firstClass = selectedGameClass[0].name
      temp.firstTalent = selectedGameClass[0].talentName
    }
    dispatch(set({ ...test, ...temp }))
    Router.push('./result')
  }

  return (
    <>
      <div style={{ marginBottom: '10px' }} />
      <Panel>
        <h3 className="panel-sub-title">{t('gameclass.selectClassComment')}</h3>
        <h2 className="panel-title">{t('gameclass.selectClassTitle')}</h2>
        <div className="panel-text" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {GameClassList.map((item, index) => (
            <StyledGameClassItemWrapper key={index}>
              <StyledGameClassItem
                color={item.color}
                url={item.image}
                onClick={() => {
                  setItemInfo(item)
                  setShowTalent(true)
                }}
              >
                <StyledGameClassItemBackground url={item.background}></StyledGameClassItemBackground>
                <span>{t(`gameclass.${item.name}`)}</span>
              </StyledGameClassItem>
            </StyledGameClassItemWrapper>
          ))}
        </div>
      </Panel>
      <Panel>
        <StyledSelectedGameClassList>
          {selectedGameClass.length === 0 ? (
            <StyledSelectedGameClassListEmpty>{t('gameclass.selectClassEmpty')}</StyledSelectedGameClassListEmpty>
          ) : (
            selectedGameClass.map((item, index) => (
              <StyledGameClassTalentsSelected key={index} style={{ color: item.color }} onClick={() => unselectGameClass(item)}>
                <StyledGameClassTalentImageSelected
                  url={'https://i.ibb.co/8NHpM1C/sprite-information.png'}
                  pos={item.talentImage}
                  image={item.prevImage}
                  imageHover={item.prevImageHover}
                >
                  <div className={'close'}>X</div>
                </StyledGameClassTalentImageSelected>
                <StyledGameClassTalentContentSelected>
                  <div className={'name'}>{t(`gameclass.${item.talentName}`)}</div>
                </StyledGameClassTalentContentSelected>
              </StyledGameClassTalentsSelected>
            ))
          )}
        </StyledSelectedGameClassList>
      </Panel>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Button
          onClick={() => {
            if (selectedGameClass.length > 0) {
              goTest()
            }
          }}
        >
          {t('gameclass.goResult')}
        </Button>
      </div>
      <Modal show={showTalent} onClose={() => setShowTalent(false)}>
        {itemInfo &&
          itemInfo.talents.map((item, index) => (
            <StyledGameClassTalents key={index} onClick={() => selectGameClass({ name: itemInfo.name, color: itemInfo.color }, item)}>
              <StyledGameClassTalentImage
                url={'https://i.ibb.co/8NHpM1C/sprite-information.png'}
                pos={item.image}
                image={item.prevImage}
                imageHover={item.prevImageHover}
              ></StyledGameClassTalentImage>
              <StyledGameClassTalentContent>
                <div className={'name'}>{t(`gameclass.${item.name}`)}</div>
                <div className={'desc'}>{t(`gameclass.${item.desc}`)}</div>
              </StyledGameClassTalentContent>
            </StyledGameClassTalents>
          ))}
        <div style={{ width: '100%', textAlign: 'center' }}>
          <Button onClick={() => setShowTalent(false)}>{t('gameclass.close')}</Button>
        </div>
      </Modal>
    </>
  )
}

export default GameClass
