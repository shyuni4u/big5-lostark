import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import countModule from './count'
import testModule from './test'

const persistConfig = {
  key: 'root',
  storage
  // whitelist: ['user']
}

export const rootReducer = combineReducers({
  countModule,
  testModule
})
export const persistedReducer = persistReducer(persistConfig, rootReducer)
export type RootState = ReturnType<typeof rootReducer>
export default persistedReducer
