import {Layout} from '@components'
import MDXDocument, {metadata} from '@content/testing.mdx'
import React from 'react'

const {title} = metadata

export const index: React.FC = () => {
  return (
    <Layout title={title} navTitle="Post">
      <MDXDocument></MDXDocument>
    </Layout>
  )
}

export default index
