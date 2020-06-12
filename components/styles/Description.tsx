import styled from 'styled-components'

export const Container = styled.header`
  padding: 0 3rem;
  grid-area: description;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const Title = styled.span`
  font-size: 8rem;
  font-weight: bold;
  text-shadow: 2px 2px red, -2px -2px rgba(191, 168, 87, 1);
`

export const Caption = styled.span`
  font-family: courier-prime, monospace;
  font-size: 3rem;
  align-self: auto;
`
