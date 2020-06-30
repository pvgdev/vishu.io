import Link from 'next/link'
import React, {useEffect, useRef, useState} from 'react'

import {
  Container,
  DropDown,
  Logo,
  MenuButton,
  StyledLink,
  Title,
} from './styles/NavBar'

interface INavBar {
  MenuButton: React.FC
  Title: React.FC
  Logo: React.FC
}

export const NavBar: React.FC & INavBar = ({children}) => {
  const wrapperRef = useRef(null)
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false)
    return () => {
      document.removeEventListener('click', handleClickOutside, false)
    }
  }, [])

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsMenuOpened(false)
    }
  }

  return (
    <Container ref={wrapperRef}>
      {children}
      <MenuButton
        onClick={() => setIsMenuOpened(currentValue => !currentValue)}
      >
        Menu
      </MenuButton>

      <DropDown isMenuOpened={isMenuOpened}>
        <Link href="/" passHref>
          <StyledLink onClick={() => setIsMenuOpened(false)}>Home</StyledLink>
        </Link>
        {/* <Link href="/skills" passHref>
          <StyledLink onClick={() => setIsMenuOpened(false)}>Skills</StyledLink>
        </Link> */}
      </DropDown>
    </Container>
  )
}

NavBar.MenuButton = props => {
  return <MenuButton {...props}>Menu</MenuButton>
}

NavBar.MenuButton.displayName = 'NavBar.MenuButton'

NavBar.Title = ({children}) => {
  return <Title>{children}</Title>
}

NavBar.Title.displayName = 'NavBar.Title'

NavBar.Logo = ({children}) => {
  return <Logo>{children}</Logo>
}

NavBar.Logo.displayName = 'NavBar.Logo'
