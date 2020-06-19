import {MDXProvider} from '@mdx-js/react'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

import {Avatar} from './Avatar'
import {CodeBlock} from './CodeBlock'
import {Description} from './Description'
import {Nav} from './Nav'
import {NavBar} from './NavBar'
import {Container} from './styles/Layout'

interface Props {
  title: string
}

const components = {
  blockquote: styled.div`
    margin: 1rem 0;
    padding: 1rem;
    border: 0px;
    border-left: 10px;
    border-style: solid;
    border-color: blue;
  `,
  code: CodeBlock,
  del: styled.span`
    text-decoration: line-through;
  `,
  inlineCode: styled.code`
    color: wheat;
  `,
  em: styled.b``,
  h1: styled.h1`
    font-size: 3rem;
    line-height: 3rem;
  `,
  h2: styled.h2``,
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

export const Layout: React.FC<Props> = ({children, title}) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Avatar></Avatar>
      <Description>
        <Description.Title>
          <span>
            Vishal <br /> Goud
          </span>
        </Description.Title>
        <Description.Caption>Front-end Developer</Description.Caption>
      </Description>
      <Nav>
        <Nav.Menu></Nav.Menu>
      </Nav>
      <NavBar></NavBar>
      <div className="content">
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </Container>
  )
}
