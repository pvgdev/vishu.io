import styled from 'styled-components'

export const Container = styled.div``

export const Title = styled.h2`
  padding: 0px;
  border-bottom: 3px solid ${props => props.theme.color};
  font-family: merriweather, serif;
`

export const Grid = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 100px;
  grid-gap: 1rem;
`
