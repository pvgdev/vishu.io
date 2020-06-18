import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/palenight'
import React from 'react'

export const CodeBlock = props => {
  const {className = 'javascript', children} = props
  const language = className.replace(/language-/, '')

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: '20px',
            overflow: 'auto',
            borderRadius: '10px',
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
