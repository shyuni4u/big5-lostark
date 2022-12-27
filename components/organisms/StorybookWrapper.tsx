import { Provider } from 'react-redux'
// import { storybookStore } from 'redux/slice'
import Wrapper from './Wrapper'

export const StorybookWrapper: React.FC = ({ children }) => {
  return (
    // <Provider store={storybookStore}>
    <Wrapper>{children}</Wrapper>
    // </Provider>
  )
}

export default StorybookWrapper
