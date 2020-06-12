import styled from 'styled-components'

export const Container = styled.div`
  padding: 1px;
  grid-area: posts;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 200px;
  grid-gap: 15px;

  @media only screen and (max-width: 1366px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 200px;
    grid-gap: 15px;
  }

  @media only screen and (max-width: 1050px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 200px;
    grid-gap: 15px;
  }

  @media only screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 200px;
    grid-gap: 15px;
  }
`
