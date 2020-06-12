import React from 'react'

import {PostCard} from './PostCard'
import {Container} from './styles/Posts'

export const Posts: React.FC = () => {
  return (
    <Container>
      <PostCard>
        <PostCard.Tags
          tags={['css', 'js', 'html', 'react', 'redux']}
        ></PostCard.Tags>
        <PostCard.Date>August, 18</PostCard.Date>
        <PostCard.Title>Animating Link Underlines</PostCard.Title>
      </PostCard>
      <PostCard>
        <PostCard.Tags tags={['css', 'js']}></PostCard.Tags>
        <PostCard.Date>August, 18</PostCard.Date>
        <PostCard.Title>Animating Link Underlines</PostCard.Title>
      </PostCard>
      <PostCard>
        <PostCard.Tags tags={['css', 'js']}></PostCard.Tags>
        <PostCard.Date>August, 18</PostCard.Date>
        <PostCard.Title>Animating Link Underlines</PostCard.Title>
      </PostCard>
      <PostCard>
        <PostCard.Tags tags={['css', 'js']}></PostCard.Tags>
        <PostCard.Date>August, 18</PostCard.Date>
        <PostCard.Title>Animating Link Underlines</PostCard.Title>
      </PostCard>
      <PostCard>
        <PostCard.Tags tags={['css', 'js']}></PostCard.Tags>
        <PostCard.Date>August, 18</PostCard.Date>
        <PostCard.Title>Animating Link Underlines</PostCard.Title>
      </PostCard>
      <PostCard>
        <PostCard.Tags tags={['css', 'js']}></PostCard.Tags>
        <PostCard.Date>August, 18</PostCard.Date>
        <PostCard.Title>Animating Link Underlines</PostCard.Title>
      </PostCard>
      <PostCard>
        <PostCard.Tags tags={['css', 'js']}></PostCard.Tags>
        <PostCard.Date>August, 18</PostCard.Date>
        <PostCard.Title>Animating Link Underlines</PostCard.Title>
      </PostCard>
      <PostCard>
        <PostCard.Tags tags={['css', 'js']}></PostCard.Tags>
        <PostCard.Date>August, 18</PostCard.Date>
        <PostCard.Title>Animating Link Underlines</PostCard.Title>
      </PostCard>
      <PostCard>
        <PostCard.Tags tags={['css', 'js']}></PostCard.Tags>
        <PostCard.Date>August, 18</PostCard.Date>
        <PostCard.Title>Animating Link Underlines</PostCard.Title>
      </PostCard>
      <PostCard>
        <PostCard.Tags tags={['css', 'js']}></PostCard.Tags>
        <PostCard.Date>August, 18</PostCard.Date>
        <PostCard.Title>Animating Link Underlines</PostCard.Title>
      </PostCard>
    </Container>
  )
}
