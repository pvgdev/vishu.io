import styled from 'styled-components'

interface SkillCardProps {
  color?: string
  backgroundColor?: string
}

export const Container = styled.span<SkillCardProps>`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.p`
  font-family: courier-prime, serif;

  margin-top: 15px;
`
