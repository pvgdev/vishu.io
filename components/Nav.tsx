import Link from 'next/link'
import React from 'react'

import {Container, StyledLink} from './styles/Nav'

interface INav {
  Menu: React.FC
}

export const Nav: React.FC & INav = ({children}) => {
  return <Container>{children}</Container>
}

Nav.Menu = () => {
  return (
    <>
      <Link href="/" passHref>
        <StyledLink>Home</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>Tags</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>Skills</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>About</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>Contact</StyledLink>
      </Link>
    </>
  )
}

Nav.Menu.displayName = 'Nav.Menu'
