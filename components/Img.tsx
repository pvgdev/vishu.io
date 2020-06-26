import React from 'react'

import {Container} from './styles/Img'

interface ImgProps {
  src: string
}

export const Img: React.FC = ({children}) => {
  return <Container>{children}</Container>
}
