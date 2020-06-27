import React from 'react'

import MyPicture from '../images/avatar.png?trace'
import {Container} from './styles/Avatar'

export const Avatar: React.FC = () => {
  return (
    <>
      <Container src={MyPicture.trace} />
      <Container src={MyPicture.src} />
    </>
  )
}
