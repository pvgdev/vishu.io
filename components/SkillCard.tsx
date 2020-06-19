import React from 'react'

import {Container, Image} from './styles/SkillCard'

interface ImageProps {
  height?: string
  width?: string
  color?: string
  src: string
}

interface SkillCardProps {
  color: string
}

interface ISkillCard {
  Image: React.FC<ImageProps>
}

export const SkillCard: React.FC<SkillCardProps> & ISkillCard = ({
  children,
  color,
}) => {
  return <Container color={color}>{children}</Container>
}

SkillCard.Image = ({
  height = '150px',
  width = '250px',
  color = 'white',
  src,
}) => {
  return (
    <>
      <Image height={height} width={width} color={color} src={src}></Image>
    </>
  )
}

SkillCard.Image.displayName = 'SkillCard.Image'
