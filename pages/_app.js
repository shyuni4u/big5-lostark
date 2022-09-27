import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { createStore } from 'redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { wrapper } from 'store'
import { persistedReducer } from 'modules'

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
}
export class RootApp extends App {
  render() {
    const { Component, other } = this.props;
    const store = createStore(persistedReducer)
    const persistor = persistStore(store)
    return (
      <PersistGate persistor={persistor} loading={<div>loading...</div>}>
        <React.Fragment>
        <Head>
          <title>LOSTARK - Class recommendation by Machine learning</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="심리테스트, 머신러닝, 직업 추천, 로스트아크, 로아, LOSTARK, Machine Learning, ML, MBTI, Big five test"></meta>
          <meta name="description" content="재미로 보는 머신러닝을 통한 로스트 아크 직업 추천 / 뉴비를 위한 유저들의 데이터. Big 5 test for selecting lostark class. Lostarc class recommendation through machine learning for fun / by Korean user datas." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Big 5 test." />
          <meta property="og:description" content="재미로 보는 머신러닝을 통한 로스트 아크 직업 추천 / 뉴비를 위한 유저들의 데이터. Big 5 test for selecting lostark class. Lostarc class recommendation through machine learning for fun / by Korean user datas." />
          <meta property="og:url" content="http://lostark.enzo.kr/" />
          <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>
        </Head>
        <div style={styles.layout}>
          <main style={styles.main}>
            <Component {...other} />
          </main>
          <footer style={styles.footer}>Copyright 2021 <a href='mailto:shyuniz1111@gmail.com' style={{ textDecoration: 'underline' }}>shyuniz</a> Authors.</footer>
        </div>
        </React.Fragment>
      </PersistGate>
    );
  }
}

export default wrapper.withRedux(RootApp);
