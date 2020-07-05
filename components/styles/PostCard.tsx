import styled from 'styled-components'

interface TagProps {
  color: string
  bgColor: string
}

export const Container = styled.div`
  width: 100%;
  padding: 0px 1rem;
  display: flex;
  flex-direction: column;
  align-self: center;
  /* background-color: rgba(250, 248, 246, 1); */
  /* align-items: center; */
`

export const Tag = styled.span<TagProps>`
  padding: 2px 4px;
  font-family: courier-prime, monospace;
  color: ${props => (props.color ? props.color : 'white')};
  background-color: ${props => (props.bgColor ? props.bgColor : 'white')};
  border: 1px solid ${props => props.theme.color};
  margin: 3rem 0;
  margin-right: 1rem;
  border: ${props => `1px solid ${props.theme.color}`};
`

export const Date = styled.div`
  /* color: rgba(112, 117, 125, 1); */
`

export const Title = styled.h3`
  font-family: merriweather, serif;
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: rgb(51, 51, 51);
    text-decoration: none;
  }
`

export const Description = styled.p``

export const ReadMore = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;

  a {
    border: ${props => `1px solid ${props.theme.color}`};
    padding: 5px 1rem;
    display: inline;
    /* background-color: rgba(255, 75, 168, 1);
    background-color: rgba(254, 103, 58, 1); */
    /* margin: 3rem 0; */
    color: ${props => props.theme.color};
    text-decoration: none;
  }
`
