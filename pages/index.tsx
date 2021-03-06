import {Layout, PostCard, Posts} from '@components'
import fs from 'fs'
import {GetStaticProps} from 'next'
import Link from 'next/link'
import {extname, join, relative, resolve} from 'path'
import React from 'react'

interface Post {
  author: string
  date: string
  title: string
  description: string
  tags: string[]
  urlPath: string
}

interface Props {
  posts: Post[]
}

export const index: React.FC<Props> = ({posts}) => {
  return (
    <Layout title="Home | vishu.io" navTitle="Home">
      <Posts>
        {posts.map(post => (
          <PostCard key={post.urlPath}>
            <PostCard.Tags tags={post.tags}></PostCard.Tags>
            <PostCard.Date>{post.date}</PostCard.Date>
            <PostCard.Title>
              <Link href={post.urlPath} passHref>
                <a>{post.title}</a>
              </Link>
            </PostCard.Title>
            <PostCard.Description>{post.description}</PostCard.Description>
            <PostCard.ReadMore>
              <Link href={post.urlPath} passHref>
                <a>Read&nbsp;&gt;&gt;&gt;</a>
              </Link>
            </PostCard.ReadMore>
          </PostCard>
        ))}
      </Posts>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const fsPromises = fs.promises
  async function* getFiles(dir) {
    const dirents = await fsPromises.readdir(dir, {
      withFileTypes: true,
    })

    for (const dirent of dirents) {
      const res = resolve(dir, dirent.name)
      if (dirent.isDirectory()) {
        yield* getFiles(res)
      } else if (extname(dirent.name).toLowerCase() == '.mdx') {
        yield res
      }
    }
  }

  const posts = await (async () => {
    const meta = []
    const rootDir = join(process.cwd(), '/content')
    for await (const f of getFiles(rootDir)) {
      const relativePath = relative(rootDir, f)
      const {metadata} = await import('../content/' + relativePath)
      meta.push(metadata)
    }
    return meta
  })()

  return {
    props: {
      posts,
    },
  }
}

export default index
