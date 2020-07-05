import {MDXProvider} from '@mdx-js/react'
import Head from 'next/head'
import Router from 'next/router'
import React, {useState} from 'react'
import styled from 'styled-components'

import {CodeBlock} from './CodeBlock'
import {Nav} from './Nav'
import {NavBar} from './NavBar'
import {Container} from './styles/Layout'

interface Props {
  title: string
  description?: string
  date?: string
  isMDX?: boolean
  navTitle?: string
}

const components = {
  blockquote: styled.div`
    margin: 1rem 0;
    padding: 1rem;
    border: 0px;
    border-left: 5px;
    border-style: solid;
    border-color: rgba(61, 126, 154, 1);
    background-color: rgba(255, 247, 208, 1);
  `,
  code: CodeBlock,
  del: styled.span`
    text-decoration: line-through;
  `,
  inlineCode: styled.span`
    background-color: rgba(243, 243, 230, 1);
    color: rgba(255, 75, 168, 1);
    font-weight: bold;
  `,
  em: styled.b``,
  h1: styled.h1`
    font-family: merriweather, serif;
  `,
  h2: styled.h2`
    font-family: merriweather, serif;
  `,
  h3: styled.h3`
    font-family: merriweather, serif;
  `,
  h4: styled.h4``,
  h5: styled.h5``,
  h6: styled.h6``,
  li: styled.li``,
  hr: styled.hr``,
  ol: styled.ol`
    padding-left: 4rem;
    > ul {
      margin: 0px;
      padding-left: 0rem;
    }
  `,
  p: styled.p`
    margin: 1rem 0;
  `,
  pre: styled.pre`
    margin: 0;
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
    padding-left: 4rem;
  `,
}

export const Layout: React.FC<Props> = ({
  children,
  title,
  description = '',
  date = '',
  navTitle,
  isMDX = false,
}) => {
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
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width"></meta>
      </Head>
      <Nav>
        <Nav.MenuLeft></Nav.MenuLeft>
        <Nav.MenuRight></Nav.MenuRight>
      </Nav>
      <NavBar>
        <NavBar.Logo>&lt;vishu /&gt;</NavBar.Logo>
        <NavBar.Title>{navTitle !== undefined ? navTitle : date}</NavBar.Title>
      </NavBar>
      <MDXProvider components={components}>
        <div className="content">
          {loading && (
            <div className="sk-cube-grid">
              <div className="sk-cube sk-cube1"></div>
              <div className="sk-cube sk-cube2"></div>
              <div className="sk-cube sk-cube3"></div>
              <div className="sk-cube sk-cube4"></div>
              <div className="sk-cube sk-cube5"></div>
              <div className="sk-cube sk-cube6"></div>
              <div className="sk-cube sk-cube7"></div>
              <div className="sk-cube sk-cube8"></div>
              <div className="sk-cube sk-cube9"></div>
            </div>
          )}
          {!loading && isMDX && (
            <MDXHeader title={title} description={description} date={date}>
              {children}
            </MDXHeader>
          )}
          {!loading && !isMDX && children}
        </div>
      </MDXProvider>
    </Container>
  )
}

interface MDXHeaderProps {
  title: string
  description: string
  date: string
}

export const MDXHeader: React.FC<MDXHeaderProps> = ({
  title,
  description,
  date,
  children,
}) => {
  return (
    <div>
      <components.h2>{title}</components.h2>
      <p>{description}</p>
      <components.em>{date}</components.em>
      <br />
      <components.hr />
      {children}
    </div>
  )
}
