import {MDXProvider} from '@mdx-js/react'
import Head from 'next/head'
import Router from 'next/router'
import React, {useState} from 'react'
import styled from 'styled-components'

import {Avatar} from './Avatar'
import {CodeBlock} from './CodeBlock'
import {Description} from './Description'
import {Nav} from './Nav'
import {NavBar} from './NavBar'
import {Container} from './styles/Layout'

interface Props {
  title: string
  navTitle: string
}

const components = {
  blockquote: styled.div`
    margin: 1rem 0;
    border: 0px;
    border-left: 10px;
    border-style: solid;
    border-color: blue;
  `,
  code: CodeBlock,
  del: styled.span`
    text-decoration: line-through;
  `,
  inlineCode: styled.pre`
    color: wheat;
  `,
  em: styled.b``,
  h1: styled.h1`
    font-family: merriweather, serif;
  `,
  h2: styled.h2`
    font-family: merriweather, serif;
  `,
  h3: styled.h3``,
  h4: styled.h4``,
  h5: styled.h5``,
  h6: styled.h6``,
  li: styled.li``,
  hr: styled.hr``,
  ol: styled.ol`
    list-style-position: inside;
  `,
  p: styled.p`
    margin: 1rem 0;
  `,
  pre: styled.pre`
    margin: 1rem 0;
  `,
  strong: styled.b``,
  table: styled.table`
    border-collapse: collapse;
  `,
  thead: styled.thead``,
  th: styled.th`
    padding: 1rem;
    border: 1px solid black;
  `,
  td: styled.td`
    padding: 1rem;
    border: 1px solid black;
  `,
  ul: styled.ul`
    list-style-position: inside;
  `,
}

export const Layout: React.FC<Props> = ({children, title, navTitle}) => {
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', () => {
    setLoading(true)
  })

  Router.events.on('routeChangeComplete', () => {
    setLoading(false)
  })

  Router.events.on('routeChangeError', () => {
    setLoading(false)
  })

  return (
    <Container>
      <MDXProvider components={components}>
        <Head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          ></meta>
        </Head>
        <Avatar></Avatar>
        <Description>
          <Description.Title>Vishal Goud</Description.Title>
          <Description.Caption>Full Stack Developer</Description.Caption>
        </Description>
        <Nav>
          <Nav.Menu></Nav.Menu>
        </Nav>
        <NavBar>
          <NavBar.Logo>&lt;pvgdev /&gt;</NavBar.Logo>
          <NavBar.Title>{navTitle}</NavBar.Title>
        </NavBar>
        <div className="content">
          {loading && <div className="content">Loading...</div>}
          {!loading && children}
        </div>
      </MDXProvider>
    </Container>
  )
}
