import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns:
    [footer-start] 100px
    [avatar-start posts-start]1fr
    [avatar-end description-start] 3fr
    [description-end navigation-start] 100px
    [navigation-end posts-end] 100px
    [footer-end];
  grid-template-rows:
    50px
    [avatar-start description-start navigation-start] 2fr
    [avatar-end description-end navigation-end] 30px
    [posts-start] auto
    [posts-end] 1fr
    [footer-start] 4rem
    [footer-end];
  grid-gap: 0px;

  @media only screen and (max-width: 1366px) {
    grid-template-columns:
      [footer-start] 100px
      [avatar-start posts-start]1fr
      [avatar-end description-start] 3fr
      [description-end navigation-start] 100px
      [navigation-end posts-end] 100px
      [footer-end];
    grid-template-rows:
      50px
      [avatar-start description-start navigation-start] 2fr
      [avatar-end description-end navigation-end] 30px
      [posts-start] auto
      [posts-end] 1fr
      [footer-start] 4rem
      [footer-end];
    grid-gap: 0px;
  }
`
