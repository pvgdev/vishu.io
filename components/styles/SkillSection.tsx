import styled from 'styled-components'

export const Container = styled.div`
  margin: 0px;
`

export const Title = styled.div`
  /* border-bottom: 3px solid ${props => props.theme.color}; */
  /* font-family: merriweather, serif; */
  /* display: none; */
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-auto-rows: 120px;
  text-align: center;
`
