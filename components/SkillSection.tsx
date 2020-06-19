import React from 'react'

import {Container, Grid, Title} from './styles/SkillSection'

interface ISkillSection {
  Title: React.FC
  Grid: React.FC
}

export const SkillSection: React.FC & ISkillSection = ({children}) => {
  return <Container>{children}</Container>
}

SkillSection.Title = ({children}) => {
  return <Title>{children}</Title>
}

SkillSection.Title.displayName = 'SkillSection.Title'

SkillSection.Grid = ({children}) => {
  return <Grid>{children}</Grid>
}

SkillSection.Grid.displayName = 'SkillSection.Grid'
