import styled from 'styled-components'

export const Container = styled.div`
  /* min-height: 100vh;
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
  grid-gap: 0px; */

  margin: 0 auto;
  min-height: 100vh;
  max-width: 800px;
  display: grid;
  grid-template-columns:
    [navbar-start footer-start] 2rem
    [avatar-start posts-start] 150px
    [avatar-end] 2rem
    [description-start] 1fr
    [description-end posts-end] 2rem
    [footer-end navbar-end];
  grid-template-rows:
    [navbar-start] 3rem
    [navbar-end] 1rem
    [avatar-start description-start] 1fr
    [avatar-end description-end] 5rem
    [posts-start] auto
    [posts-end] 1rem
    [footer-start] 5rem
    [footer-end];

  @media only screen and (min-width: 600px) {
    grid-template-columns:
      [footer-start] 2rem
      [avatar-start posts-start] 200px
      [avatar-end] 3rem
      [description-start] 2fr
      [description-end nav-start] auto [posts-end nav-end] 2rem
      [footer-end];
    grid-template-rows:
      3rem
      [avatar-start description-start nav-start] 1fr
      [avatar-end description-end nav-end] 5rem
      [posts-start] auto
      [posts-end] 1rem
      [footer-start] 5rem
      [footer-end];
  }
`
