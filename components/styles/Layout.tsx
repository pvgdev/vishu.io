import styled from 'styled-components'

export const Container = styled.div`
  /* min-height: 100vh;
  display: grid;
  grid-template-columns:
    [footer-start] 100px
    [avatar-start content-start]1fr
    [avatar-end description-start] 3fr
    [description-end navigation-start] 100px
    [navigation-end content-end] 100px
    [footer-end];
  grid-template-rows:
    50px
    [avatar-start description-start navigation-start] 2fr
    [avatar-end description-end navigation-end] 30px
    [content-start] auto
    [content-end] 1fr
    [footer-start] 4rem
    [footer-end];
  grid-gap: 0px; */

  margin: 0 auto;
  min-height: 100vh;
  max-width: 800px;
  display: grid;
  grid-template-columns:
    [navbar-start] 2rem
    [avatar-start content-start] 150px
    [avatar-end] 2rem
    [description-start] 1fr
    [description-end content-end] 2rem
    [navbar-end];
  grid-template-rows:
    [navbar-start] 5rem
    [navbar-end] 1rem
    [avatar-start description-start] auto
    [avatar-end description-end] 5rem
    [content-start] 1fr
    [content-end];

  @media only screen and (min-width: 600px) {
    grid-template-columns:
      2rem
      [avatar-start content-start] 200px
      [avatar-end] 3rem
      [description-start] 2fr
      [description-end nav-start] auto [content-end nav-end] 2rem;
    grid-template-rows:
      3rem
      [avatar-start description-start nav-start] auto
      [avatar-end description-end nav-end] 5rem
      [content-start] 1fr
      [content-end];
  }
`
