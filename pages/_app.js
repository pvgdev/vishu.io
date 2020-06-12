import './styles.css'

import React from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components'

import {dark} from '../themes'

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
    box-sizing: border-box;
    font-family: courier-prime, monospace;
    font-size: 1.6rem;
    background-color: ${props => props.theme.colors.main};
    color: ${props => props.theme.colors.secondary}
  }

`

// import App from 'next/app'
function MyApp({Component, pageProps}) {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle theme={dark} />
        <Component {...pageProps} />
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
