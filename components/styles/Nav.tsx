import styled from 'styled-components'

export const Container = styled.nav`
  grid-area: navigation;
  display: flex;
  flex-direction: column;
`

export const StyledLink = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    color: ${props => props.theme.colors.main};
    background-color: #fff;
  }

  :active {
    color: ${props => props.theme.colors.main};
    background-color: #fff;
  }

  @media only screen and (max-width: 1366px) {
    display: none;
  }
`
