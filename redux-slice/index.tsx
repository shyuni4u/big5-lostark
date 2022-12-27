import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
// import withReduxEnhancer from 'addon-redux/enhancer'
import { persistReducer } from 'redux-persist'
import { createWrapper } from 'next-redux-wrapper'

import test from './test'

export const rootReducer = combineReducers({
  test: test.reducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['test']
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

const makeStore = () => store

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development'
})

export default store
