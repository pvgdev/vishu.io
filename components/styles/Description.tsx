import styled from 'styled-components'

export const Container = styled.header`
  grid-area: description;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* border: 1px solid red; */
`

export const Title = styled.span`
  font-weight: bold;
  font-size: 3rem;
  /* text-shadow: 2px 2px red, -2px -2px rgba(191, 168, 87, 1); */
`

export const Caption = styled.span`
  font-family: courier-prime, monospace;
  align-self: auto;
`
