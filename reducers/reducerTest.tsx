import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { testInfoState, setTestIfno } from '../modules/test';

const reducerTestInfo = () => {
  const dispatch = useDispatch();

  const testInfo = {
    get: useSelector((state: RootState) => state.testModule),
    set: useCallback((value: testInfoState) => dispatch(setTestIfno(value)), [
      dispatch
    ])
  };

  return {
    testInfo
  };
};

export default reducerTestInfo;
