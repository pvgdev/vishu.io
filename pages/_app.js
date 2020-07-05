/* eslint-disable react/display-name */
import './styles.css'

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
    font-family: merriweather, monospace;
    font-size: 1.6rem;
    line-height: 1.5;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
  }

  .content {
    grid-area: content;
    > div > * {
      margin: 2rem 1.5rem;
    }
    > div > pre {
      margin: 1rem 0px;
    }
		> div > div {
			margin: 0px;
		}

		svg > div {
			margin: 0px;
		}
  }

.sk-cube-grid {
	width: 40px;
	height: 40px;
	margin: 100px auto;
	position: absolute;
	top: 40%;
	left: 0;
	right: 0;
	text-align: center;
}

.sk-cube-grid .sk-cube {
	width: 33%;
	height: 33%;
	background-color: ${props => props.theme.color};
	float: left;
	-webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
	animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
}

.sk-cube-grid .sk-cube1 {
	-webkit-animation-delay: 0.2s;
	animation-delay: 0.2s;
}

.sk-cube-grid .sk-cube2 {
	-webkit-animation-delay: 0.3s;
	animation-delay: 0.3s;
}

.sk-cube-grid .sk-cube3 {
	-webkit-animation-delay: 0.4s;
	animation-delay: 0.4s;
}

.sk-cube-grid .sk-cube4 {
	-webkit-animation-delay: 0.1s;
	animation-delay: 0.1s;
}

.sk-cube-grid .sk-cube5 {
	-webkit-animation-delay: 0.2s;
	animation-delay: 0.2s;
}

.sk-cube-grid .sk-cube6 {
	-webkit-animation-delay: 0.3s;
	animation-delay: 0.3s;
}

.sk-cube-grid .sk-cube7 {
	-webkit-animation-delay: 0s;
	animation-delay: 0s;
}

.sk-cube-grid .sk-cube8 {
	-webkit-animation-delay: 0.1s;
	animation-delay: 0.1s;
}

.sk-cube-grid .sk-cube9 {
	-webkit-animation-delay: 0.2s;
	animation-delay: 0.2s;
}

@-webkit-keyframes sk-cubeGridScaleDelay {
	0%,
	70%,
	100% {
		-webkit-transform: scale3D(1, 1, 1);
		transform: scale3D(1, 1, 1);
	}
	35% {
		-webkit-transform: scale3D(0, 0, 1);
		transform: scale3D(0, 0, 1);
	}
}

@keyframes sk-cubeGridScaleDelay {
	0%,
	70%,
	100% {
		-webkit-transform: scale3D(1, 1, 1);
		transform: scale3D(1, 1, 1);
	}
	35% {
		-webkit-transform: scale3D(0, 0, 1);
		transform: scale3D(0, 0, 1);
	}
}
`

// import App from 'next/app'
function MyApp({Component, pageProps}) {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Component {...pageProps}> </Component>
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
