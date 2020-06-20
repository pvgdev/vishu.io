import React, {useState} from 'react'

import {MobileNav} from './MobileNav'
import {Container, Logo, MenuButton, Title} from './styles/NavBar'

interface INavBar {
  MenuButton: React.FC
  Title: React.FC
  Logo: React.FC
}

export const NavBar: React.FC & INavBar = ({children}) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  return (
    <Container>
      {children}
      <MenuButton
        onClick={() => setIsMenuOpened(currentValue => !currentValue)}
      >
        Menu
      </MenuButton>
      {isMenuOpened && (
        <MobileNav>
          <MobileNav.Menu></MobileNav.Menu>
        </MobileNav>
      )}
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
