import React, {useState} from 'react'

import {MobileNav} from './MobileNav'
import {Container, MenuButton} from './styles/NavBar'

interface INavBar {
  MenuButton: React.FC
}

export const NavBar: React.FC & INavBar = props => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  return (
    <Container {...props}>
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
