import React from 'react'

import {
  Container,
  Date,
  Description,
  ReadMore,
  Tag,
  Title,
} from './styles/PostCard'

interface TagProps {
  tags: string[]
}

interface IPostCard {
  Date: React.FC
  Tags: React.FC<TagProps>
  Title: React.FC
  Description: React.FC
  ReadMore: React.FC
}

export const PostCard: React.FC & IPostCard = ({children}) => {
  return <Container>{children}</Container>
}

PostCard.Date = ({children}) => {
  return <Date>{children}</Date>
}

PostCard.Date.displayName = 'PostCard.Date'

PostCard.Tags = ({tags}) => {
  const tagColors = {
    css: 'orange',
    js: 'rgba(247, 223, 30, 1)',
    html: 'rgba(78, 110, 138, 1)',
    react: 'rgba(97, 218, 251, 1)',
    redux: 'rgba(89, 61, 136, 1)',
    javascript: 'rgba(0, 0, 0, 1)',
    typescript: 'rgba(255, 255, 255, 1)',
  }

  const tagBgColors = {
    css: 'orange',
    js: 'rgba(247, 223, 30, 1)',
    html: 'rgba(78, 110, 138, 1)',
    react: 'rgba(32, 35, 42, 1)',
    redux: 'rgba(89, 61, 136, 1)',
    javascript: 'rgba(247, 223, 30, 1)',
    typescript: 'rgba(0, 122, 204, 1)',
  }

  return (
    <div>
      {tags.map(tag => (
        <Tag key={tag} color={tagColors[tag]} bgColor={tagBgColors[tag]}>
          {tag.toUpperCase()}
        </Tag>
      ))}
    </div>
  )
}

PostCard.Tags.displayName = 'PostCard.Tags'

PostCard.Title = ({children}) => {
  return <Title>{children}</Title>
}

PostCard.Title.displayName = 'PostCard.Title'

PostCard.Description = ({children}) => {
  return <Description>{children}</Description>
}

PostCard.Description.displayName = 'PostCard.Description'

PostCard.ReadMore = ({children}) => {
  return <ReadMore>{children}</ReadMore>
}

PostCard.ReadMore.displayName = 'PostCard.ReadMore'
