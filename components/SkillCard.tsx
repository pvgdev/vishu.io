import React from 'react'

import {Container, Title} from './styles/SkillCard'

interface SkillCardProps {
  color?: string
  backgroundColor?: string
}

interface ISkillCard {
  Title: React.FC
}

export const SkillCard: React.FC<SkillCardProps> & ISkillCard = ({
  children,
  color = '#fff',
  backgroundColor = '#000',
}) => {
  return (
    <Container color={color} backgroundColor={backgroundColor}>
      {children}
    </Container>
  )
}

SkillCard.Title = ({children}) => {
  return <Title>{children}</Title>
}

SkillCard.Title.displayName = 'SkillCard.Title'
