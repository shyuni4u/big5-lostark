import React, { Fragment, useState, useEffect } from 'react'
import Router from 'next/router'
import { useTranslation } from 'react-i18next'
import styled, { keyframes } from 'styled-components'

import Panel from '../components/atoms/Panel'
import Button from '../components/atoms/Button'
import Wrapper from '../components/organisms/Wrapper'
import Adfit from '../components/molecules/Adfit'

import { useDispatch } from 'react-redux'
import { set } from 'redux-slice/test'

const StyledGoDetail = styled.a`
  font-size: 0.6em;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 2px 5px;
  user-select: none;
  cursor: pointer;
`

const ring = keyframes`
  0% {
    width: 30px;
    height: 30px;
    opacity: .4;
  }
  100% {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
`

const StyledLanguage = styled.button`
  color: #fff;
  font-weight: 600;
  padding: 50px;
  cursor: pointer;

  &::after {
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 6px solid #00ffcb;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${ring} 1.5s infinite;
  }
`

const DEFAULT_LANGUAGE = 'kr'

export const Index: React.FC = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()

  const [lang, setLang] = useState<string>(DEFAULT_LANGUAGE)

  useEffect(() => {
    if (window) {
      setLang(window.localStorage.getItem('lang') || DEFAULT_LANGUAGE)
    } else {
      setLang(DEFAULT_LANGUAGE)
    }
  }, [])

  useEffect(() => {
    i18n.changeLanguage(lang)
    if (window) window.localStorage.setItem('lang', lang)
  }, [lang])

  const changeLanguage = (ln: string = DEFAULT_LANGUAGE) => {
    setLang(ln)
    if (window) window.localStorage.setItem('lang', ln)
  }

  const goGameClass = (newbie: boolean) => {
    const temp = {
      firstClass: '',
      firstTalent: '',
      secondClass: '',
      secondTalent: '',
      thirdClass: '',
      thirdTalent: ''
    }
    dispatch(set({ ...temp, newbie: newbie }))
    Router.push('./test')
  }

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
      <div style={{ width: '100%', textAlign: 'center', position: 'relative' }}>
        <StyledLanguage type={'button'} onClick={() => changeLanguage(lang === 'en' ? 'kr' : 'en')}>
          {lang === 'en' ? 'KOREAN' : 'ENGLISH'}
        </StyledLanguage>
      </div>
      <Panel>
        <h2 className={'panel-title'}>
          {t('home.big5Test')} + {t('home.statClass')}
        </h2>
        <h3 className={'panel-sub-title'}>{t('home.big5testTitle')}</h3>
        <div className={'panel-content'}>
          {t('home.big5testDesc')
            .split('\n')
            .map((el, elIdx) => (
              <Fragment key={elIdx}>
                {el}
                <br />
              </Fragment>
            ))}
          <StyledGoDetail href={t('home.big5testLink')} title={t('home.big5testLinkTitle')} target={'_blank'}>
            {t('home.detail')}
          </StyledGoDetail>
        </div>
      </Panel>
      {/* <Panel>
        <div className={'panel-text'}>
          <span className={'panel-sub-title'}>{t('home.comment')}</span>
        </div>
      </Panel> */}
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
  )
}

export default Index
