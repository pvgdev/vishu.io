import styled from 'styled-components'

export const Container = styled.div`
  grid-area: navbar;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: ${props => props.theme.color};

  @media only screen and (min-width: 600px) {
    display: none;
  }
`

export const MenuButton = styled.button`
  font-size: 2rem;
  margin: 5px;
  padding: 5px;
  background-color: ${props => props.theme.color};
  color: ${props => props.theme.backgroundColor};
  border: 1px solid ${props => props.theme.backgroundColor};
`
