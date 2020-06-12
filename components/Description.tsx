import React from 'react'

import {Caption, Container, Title} from './styles/Description'

interface IDescription {
  Title: React.FC
  Caption: React.FC
}

export const Description: React.FC & IDescription = ({children}) => {
  return <Container>{children}</Container>
}

Description.Title = ({children}) => {
  return <Title>{children}</Title>
}

Description.Title.displayName = 'Description.Title'

Description.Caption = ({children}) => {
  return <Caption>{children}</Caption>
}

Description.Caption.displayName = 'Description.Caption'
