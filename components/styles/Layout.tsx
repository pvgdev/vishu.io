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
    [navbar-start content-start] auto
    [navbar-end content-end];
  grid-template-rows:
    [navbar-start] 5rem
    [navbar-end] 1rem
    [content-start] 1fr
    [content-end];

  @media only screen and (min-width: 600px) {
    grid-template-columns:
      [nav-start content-start] auto
      [nav-end content-end];
    grid-template-rows:
      2rem
      [nav-start] 3rem
      [nav-end] 1rem
      [content-start] 1fr
      [content-end];
  }
`
