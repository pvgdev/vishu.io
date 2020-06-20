import styled from 'styled-components'

interface ButtonProps {
  color?: string
  backgroundColor?: string
}

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
  font-family: merriweather, serif;

  font-size: 2.1rem;
  /* text-shadow: 2px 2px red, -2px -2px rgba(191, 168, 87, 1); */
`

export const Button = styled.span<ButtonProps>`
  /* text-shadow: 2px 2px red, -2px -2px rgba(191, 168, 87, 1); */
  font-family: merriweather, serif;
  font-size: 2rem;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Caption = styled.span`
  align-self: auto;
`
