import styled from 'styled-components'

export const Container = styled.div`
  grid-area: navbar;
  font-family: courier-prime, monospace;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.color};

  @media only screen and (min-width: 600px) {
    display: none;
  }
`

export const Logo = styled.h1`
  font-family: merriweather, serif;
  font-size: 2rem;
  background-color: ${props => props.theme.color};
  color: ${props => props.theme.backgroundColor};
`

export const Title = styled.h1`
  font-family: merriweather, serif;
  font-size: 2rem;
  background-color: ${props => props.theme.color};
  color: ${props => props.theme.backgroundColor};
  color: rgba(255, 75, 168, 1);
`

export const MenuButton = styled.button`
  font-size: 2rem;
  margin: 5px;
  padding: 5px;
  background-color: ${props => props.theme.color};
  color: ${props => props.theme.backgroundColor};
  border: 1px solid ${props => props.theme.backgroundColor};
`
