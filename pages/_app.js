/* eslint-disable react/display-name */
import './styles.css'

import {Footer} from '@components'
import React from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components'

import {light} from '../themes'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit; 
  }

  html {
    box-sizing: border-box;
    font-size: 10px; 
  }

  body {
    max-width: 100vw;
    box-sizing: border-box;
    font-family: courier-prime, monospace;
    font-size: 1.6rem;
    line-height: 1.5;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};

  }

  .content {
    grid-area: content;
    > div > * {
      margin: 0 1rem;
    }
    > div > pre {
      margin: 1rem 0px;
    }
  }
`

// import App from 'next/app'
function MyApp({Component, pageProps}) {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle theme={light} />

        <Component {...pageProps}> </Component>
        <Footer></Footer>
      </ThemeProvider>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
