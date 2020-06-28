/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
      <i className="bx bxs-sun"></i>
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
  return (
    <MenuLeft>
      <div>&lt;vishu /&gt;</div>
    </MenuLeft>
  )
}

Nav.MenuLeft.displayName = 'Nav.MenuLeft'
