import React from 'react'
import styled from 'styled-components'

import Wrapper from '../components/organisms/Wrapper'
import ResultForm from '../components/organisms/Result'
import Adfit from '../components/molecules/Adfit'

const StyledResult = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
    padding-top: 0px;
  `}
  ${({ theme }) => theme.media.mobile`
    flex-direction: column;
    padding-top: 0px;
  `}
`

export const Test: React.FC = () => {
  return (
    <Wrapper>
      <StyledResult>
        <ResultForm />
      </StyledResult>
      <Adfit />
    </Wrapper>
  )
}

export default Test
