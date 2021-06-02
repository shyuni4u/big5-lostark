import { combineReducers } from 'redux';
import countModule from './count';
import testModule from './test';

const rootReducer = combineReducers({
  countModule,
  testModule
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
