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
  padding: 2px 4px;
  font-weight: bold;
  color: ${props => (props.color ? props.color : 'white')};
  background-color: ${props => props.theme.color};
  /* border: 1px solid ${props => props.theme.color}; */
  margin-right: 1rem;
`

export const Date = styled.div`
  color: rgba(112, 117, 125, 1);
`

export const Title = styled.h3`
  font-family: merriweather, serif;
`

export const Description = styled.p``
