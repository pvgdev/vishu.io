import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-self: center;
  /* align-items: center; */
`

export const Tag = styled.span`
  color: ${props => props.color};
  margin-right: 1rem;
`

export const Date = styled.div`
  color: rgba(112, 117, 125, 1);
`

export const Title = styled.div`
  font-size: 2rem;
`
