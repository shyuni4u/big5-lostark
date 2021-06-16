import React, { useState, useEffect } from 'react';
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

const DEFAULT_LANGUAGE = 'kr';

export const Index: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { testInfo } = reducerTest();
  const [lang, setLang] = useState<string>(DEFAULT_LANGUAGE);

  useEffect(() => {
    if (window) {
      setLang(window.localStorage.getItem('lang') || DEFAULT_LANGUAGE);
    } else {
      setLang(DEFAULT_LANGUAGE);
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const changeLanguage = (ln: string = DEFAULT_LANGUAGE) => {
    setLang(ln);
    if (window) window.localStorage.setItem('lang', ln);
  };

  const goGameClass = (newbie: boolean) => {
    const temp = testInfo.get;
    temp.newbie = newbie;
    testInfo.set(temp);
    Router.push('./test');
  };

  return (
    <Wrapper>
      <Button onClick={() => changeLanguage(lang === 'en' ? 'kr' : 'en')}>{lang === 'en' ? 'KOREAN' : 'ENGLISH'}</Button>
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
        <h3 className={'panel-sub-title'}>{t('home.big5testTitle')}</h3>
        <div className={'panel-content'}>
          {t('home.big5testDesc')
            .split('\n')
            .map((el) => (
              <>
                {el}
                <br />
              </>
            ))}
          <StyledGoDetail href={t('home.big5testLink')} title={t('home.big5testLinkTitle')} target={'_blank'}>
            {t('home.detail')}
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
