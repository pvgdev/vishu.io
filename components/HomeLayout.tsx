import React from 'react'

import {Avatar} from './Avatar'
import {Description} from './Description'
import {Nav} from './Nav'
import {NavBar} from './NavBar'
import {Posts} from './Posts'
import {Container} from './styles/HomeLayout'

export const HomeLayout: React.FC = () => {
  return (
    <Container>
      <Avatar></Avatar>
      <Description>
        <Description.Title>
          <span>
            Vishal <br /> Goud
          </span>
        </Description.Title>
        <Description.Caption>Front-end Developer</Description.Caption>
      </Description>
      <Nav>
        <Nav.Menu></Nav.Menu>
      </Nav>
      <NavBar></NavBar>
      <Posts></Posts>
    </Container>
  )
}
