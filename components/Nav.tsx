import Link from 'next/link'
import React, {useState} from 'react'

import {MobileNav} from './MobileNav'
import {NavBar} from './NavBar'
import {Container, Menu, StyledLink} from './styles/Nav'

interface INav {
  Menu: React.FC
}

export const Nav: React.FC & INav = ({children}) => {
  return <Container>{children}</Container>
}

Nav.Menu = () => {
  return (
    <Menu>
      <Link href="/" passHref>
        <StyledLink>Home</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>Tags</StyledLink>
      </Link>
      <Link href="/skills" passHref>
        <StyledLink>Skills</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>About</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>Contact</StyledLink>
      </Link>
    </Menu>
  )
}

Nav.Menu.displayName = 'Nav.Menu'
