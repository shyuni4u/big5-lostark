export const COUNT_PLUS = 'COUNT_PLUS';
export const COUNT_MINUS = 'COUNT_MINUS';
export const COUNT_SET = 'COUNT_SET';

export type countState = {
  count: number
}

export const initialState: countState = {
  count: 0
};

export const countPlusAction = () => ({
  type: COUNT_PLUS
});

export const countMinusAction = () => ({
  type: COUNT_MINUS
})

export const setCountAction = (value: number) => ({
  type: COUNT_SET,
  count: value
})

type actions = {
  type: string
} & countState

const reducer = (state: countState = initialState, action: actions): countState | undefined => {
  switch (action.type) {
    case COUNT_PLUS:
      return {
        ...state,
        count: state.count + 1
      }
    case COUNT_MINUS:
      return {
        ...state,
        count: state.count - 1
      }
    case COUNT_SET:
      const { count } = action;
      return {
        ...state,
        count: count
      }
    default:
      return state;
  }
};

export default reducer;