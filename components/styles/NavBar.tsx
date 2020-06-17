import styled from 'styled-components'

export const Container = styled.div`
  grid-area: navbar;
  text-align: right;

  background-color: rgba(26, 26, 27, 1);

  @media only screen and (min-width: 600px) {
    display: none;
  }
`

export const MenuButton = styled.button`
  font-size: 2rem;
  height: 100%;
  padding: 2px;
  border-radius: 0px;
  border: 0px;
  background-color: rgba(0, 128, 255, 1);
  outline: 0px;
`
