import React from 'react'

import {Container} from './styles/Img'

interface ImgProps {
  src: string
  alt: string
  title: string
}

export const Img: React.FC<ImgProps> = ({children}) => {
  return <Container>{children}</Container>
}
