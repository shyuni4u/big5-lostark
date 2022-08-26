import { createWrapper } from 'next-redux-wrapper'
import { rootReducer, persistedReducer } from 'modules/index'
import { persistStore } from 'redux-persist'
import { createStore } from 'redux'

const makeConfiguredStore = (reducer) => createStore(reducer)
const makeStore = () => {
  const isServer = typeof window === 'undefined'

  if (isServer) {
    return makeConfiguredStore(rootReducer)
  } else {
    const store = makeConfiguredStore(persistedReducer)
    let persistor = persistStore(store)
    return { persistor, ...store }
  }
}

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development'
})
