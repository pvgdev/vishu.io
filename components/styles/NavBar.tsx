import styled from 'styled-components'

export const Container = styled.div`
  grid-area: navbar;
  font-family: courier-prime, monospace;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: ${props => props.theme.color}; */

  @media only screen and (min-width: 600px) {
    display: none;
  }
`

export const Logo = styled.h1`
  font-size: 2rem;
  font-family: merriweather, serif;
  font-weight: bold;
  margin-left: 1rem;

  /* background-color: ${props => props.theme.color}; */
  /* color: ${props => props.theme.backgroundColor}; */
`

export const Title = styled.h1`
  font-family: merriweather, serif;
  font-size: 2rem;
  /* background-color: ${props => props.theme.color}; */
  color: ${props => props.theme.backgroundColor};
  color: rgba(254, 103, 58, 1);
  color: rgba(255, 75, 168, 1);
`

export const MenuButton = styled.button`
  font-family: merriweather, serif;

  font-size: 2rem;
  margin: 5px;
  padding: 5px;
  /* background-color: ${props => props.theme.color}; */
  /* color: ${props => props.theme.backgroundColor}; */
  /* border: 1px solid ${props => props.theme.backgroundColor}; */
`

interface DropDownProps {
  isMenuOpened: boolean
}

export const DropDown = styled.div<DropDownProps>`
  width: 100vw;
  border-bottom: 1px solid black;
  position: absolute;
  top: 5rem;
  display: ${props => (props.isMenuOpened ? 'flex' : 'none')};

  flex-direction: column;
  /* justify-content: space-around; */
  /* align-items: center; */
`
export const StyledLink = styled.a`
  font-family: merriweather, serif;

  font-size: 2rem;
  padding: 1rem;
  color: black;
  text-decoration: none;
  /* background-color: rgba(0, 128, 255, 1); */
  /* background-color: rgba(255, 75, 168, 1); */
  background-color: ${props => props.theme.backgroundColor};

  text-align: left;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`
