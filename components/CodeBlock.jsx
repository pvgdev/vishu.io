import {mdx} from '@mdx-js/react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React from 'react'
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live'

export const CodeBlock = ({
  children,
  className = 'javascript',
  live,
  render,
}) => {
  const language = className.replace(/language-/, '')

  if (language === 'jsx') {
    if (live) {
      return (
        <div style={{marginTop: '40px'}}>
          <LiveProvider
            code={children.trim()}
            transformCode={code => '/** @jsx mdx */' + code}
            scope={{mdx}}
            theme={theme}
          >
            <LivePreview />
            <LiveEditor />
            <LiveError />
          </LiveProvider>
        </div>
      )
    }

    if (render) {
      return (
        <div style={{marginTop: '40px'}}>
          <LiveProvider
            code={children.trim()}
            transformCode={code => '/** @jsx mdx */' + code}
            scope={{mdx}}
            theme={theme}
          >
            <LivePreview />
          </LiveProvider>
        </div>
      )
    }
  }

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={theme}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre
          className={className}
          style={{
            ...style,
            maxWidth: '800px',
            overflow: 'auto',
            padding: '10px',
            fontFamily: 'courier-prime-code',
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
