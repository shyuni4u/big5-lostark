import React from 'react'

import Wrapper from '../components/organisms/Wrapper'
import GameClass from '../components/organisms/GameClass'
import Adfit from '../components/molecules/Adfit'

export const ClassForm: React.FC = () => {
  return (
    <Wrapper>
      <GameClass />
      <Adfit />
    </Wrapper>
  )
}

export default ClassForm
