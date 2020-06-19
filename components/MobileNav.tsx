import Link from 'next/link'
import React from 'react'

import {Container, Menu, StyledLink} from './styles/MobileNav'

interface IMobileNav {
  Menu: React.FC
}

export const MobileNav: React.FC & IMobileNav = ({children}) => {
  return <Container>{children}</Container>
}

MobileNav.Menu = () => {
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

MobileNav.Menu.displayName = 'Mobile.Menu'
