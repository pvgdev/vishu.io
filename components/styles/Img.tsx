import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  padding: 1rem;

  img {
    max-width: 90vw;
  }

  @media only screen and (min-width: 600px) {
    img {
      max-width: 780px;
    }
  }
`
