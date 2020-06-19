import styled from 'styled-components'

export const Container = styled.nav`
  display: none;

  @media only screen and (min-width: 600px) {
    grid-area: nav;
    display: inline-block;
  }
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-self: right;
`

export const StyledLink = styled.a`
  color: ${props => props.theme.color};
  text-decoration: none;
  text-align: right;

  :hover {
    color: ${props => props.theme.backgroundColor};
    background-color: ${props => props.theme.color};
  }

  :active {
    color: ${props => props.theme.backgroundColor};
    background-color: ${props => props.theme.color};
  }
`
