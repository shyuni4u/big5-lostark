import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

import reducerModule from '../modules/index.tsx';

const styles = {
  layout: {
    display: 'flex',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    flexDirection: 'column',
    position: 'relative'
  },
  main: {
    flex: 1
  },
  footer: {
    width: '100%',
    height: '24px',
    textAlign: 'center',
    lineHeight: '24px',
    color: '#fff',
    backgroundColor: '#000',
    // position: 'absolute',
    // bottom: '0',
    fontSize: '12px'
  }
};

const configureStore = () => {
  const store = createStore(reducerModule);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development,'
});

export class RootApp extends App {
  render() {
    const { Component, other } = this.props;
    return (
      <>
        <Head>
          <title>WoW - Big 5 test</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="심리테스트, 직업 선택, 와우, 월드 오브 워크래프트, WOW, World of warcraft, MBTI"></meta>
          <meta name="description" content="월드 오브 워크래프트 직업 선택을 위한 심리 테스트. Big 5 test for selecting world of warcraft class." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Big 5 test." />
          <meta property="og:description" content="월드 오브 워크래프트 직업 선택을 위한 심리 테스트. Big 5 test for selecting world of warcraft class." />
          <meta property="og:url" content="http://wow.enzo.kr/" />
        </Head>
        <div style={styles.layout}>
          <main style={styles.main}>
            <Component {...other} />
          </main>
          <footer style={styles.footer}>Copyright 2021 shyuniz Authors.</footer>
        </div>
      </>
    );
  }
}

export default wrapper.withRedux(RootApp);
