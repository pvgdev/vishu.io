import Link from 'next/link'
import React from 'react'

import {Container, MenuLeft, MenuRight, StyledLink} from './styles/Nav'

interface INav {
  MenuRight: React.FC
  MenuLeft: React.FC
}

export const Nav: React.FC & INav = ({children}) => {
  return <Container>{children}</Container>
}

Nav.MenuRight = () => {
  return (
    <MenuRight>
      <Link href="/" passHref>
        <StyledLink>Home</StyledLink>
      </Link>
      <Link href="/skills" passHref>
        <StyledLink>Skills</StyledLink>
      </Link>
    </MenuRight>
  )
}

Nav.MenuRight.displayName = 'Nav.MenuRight'

Nav.MenuLeft = () => {
  return <MenuLeft>&lt;vishu /&gt;</MenuLeft>
}

Nav.MenuLeft.displayName = 'Nav.MenuLeft'
