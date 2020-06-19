import styled from 'styled-components'

interface SkillCardProps {
  color?: string
  backgroundColor?: string
}

export const Container = styled.span<SkillCardProps>`
  padding: 15px;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.p`
  margin-top: 5px;
`
