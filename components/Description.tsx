import React from 'react'

import {Button, Caption, Container, Title} from './styles/Description'

interface ButtonProps {
  color?: string
  backgroundColor?: string
}

interface IDescription {
  Title: React.FC
  Caption: React.FC
  Button: React.FC<ButtonProps>
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

Description.Button = ({children, color = '#000', backgroundColor = '#fff'}) => {
  return (
    <Button color={color} backgroundColor={backgroundColor}>
      {children}
    </Button>
  )
}

Description.Button.displayName = 'Description.Button'
