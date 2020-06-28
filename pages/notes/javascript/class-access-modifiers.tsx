import {Layout} from '@components'
import MDXDocument, {
  metadata,
} from '@content/javascript/class-access-modifiers/index.mdx'
import React from 'react'

const {title, description, date} = metadata

export const index: React.FC = () => {
  return (
    <Layout title={title} description={description} date={date} isMDX={true}>
      <MDXDocument></MDXDocument>
    </Layout>
  )
}

export default index
