import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  border: 1px solid rgba(105, 111, 116, 0.5);
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
  color: rgba(105, 111, 116, 0.5);
`

export const Title = styled.div`
  padding: 4rem;
  font-size: 2rem;
  text-align: center;
`
