import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules'
import { countPlusAction, countMinusAction, setCountAction } from '../modules/count';

const reducerCount = () => {
  const dispatch = useDispatch();

  const gCount = {
    get: () => useSelector((state: RootState) => state.countModule.count),
    set: useCallback((value: number) => dispatch(setCountAction(value)), [dispatch]),
    plus: useCallback(() => dispatch(countPlusAction()), [dispatch]),
    minus: useCallback(() => dispatch(countMinusAction()), [dispatch])
  }

  return {
    gCount
  }
};

export default reducerCount;