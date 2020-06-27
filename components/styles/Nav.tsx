import styled from 'styled-components'

export const Container = styled.header`
  display: none;
  @media only screen and (min-width: 600px) {
    grid-area: nav;
    display: flex;
    justify-content: space-between;
  }
`

export const MenuLeft = styled.h2`
  display: flex;
  flex: 1;
  align-self: right;
`

export const MenuRight = styled.nav`
  display: flex;
  flex: 2;
  justify-content: flex-end;
  a {
    margin-left: 2rem;
    display: inline;
    color: rgba(255, 75, 168, 1);
    color: rgba(254, 103, 58, 1);

    text-decoration: underline;
    /* text-decoration: none; */
  }
`

export const StyledLink = styled.a`
  text-decoration: none;
  text-align: right;
`
