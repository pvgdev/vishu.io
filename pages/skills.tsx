import {Layout, SkillCard, SkillSection} from '@components'
import {
  Alpinelinux,
  Apollographql,
  Archlinux,
  Auth0,
  Babel,
  Codecov,
  Css3,
  Docker,
  Eslint,
  Gatsby,
  Git,
  Github,
  Githubactions,
  Gnubash,
  Graphql,
  Html5,
  Javascript,
  Jest,
  Json,
  Jsonwebtokens,
  Kubernetes,
  Linux,
  Markdown,
  Mongodb,
  NextDotJs,
  NodeDotJs,
  Npm,
  Postgresql,
  Postman,
  Prettier,
  ReactJs,
  Redux,
  Sass,
  SocketDotIo,
  Storybook,
  StyledComponents,
  Swagger,
  Typescript,
  Vim,
  Visualstudiocode,
  Webpack,
  Yarn,
} from '@icons-pack/react-simple-icons'
import React from 'react'

export const index: React.FC = () => {
  return (
    <Layout title="Skills | vishu.io">
      <SkillSection>
        <SkillSection.Title>Core skills</SkillSection.Title>
        <SkillSection.Grid>
          <SkillCard color="#fff" backgroundColor="rgba(227, 79, 38, 1)">
            <Html5 color="#fff" size={'auto'} />
            <SkillCard.Title>HTML5</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(21, 114, 182, 1)">
            <Css3 color="#fff" size={'auto'} />
            <SkillCard.Title>CSS3</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(204, 102, 153, 1)">
            <Sass color="#fff" size={'auto'} />
            <SkillCard.Title>Sass</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#000" backgroundColor="rgba(247, 223, 30, 1)">
            <Javascript color="#000" size={'auto'} />
            <SkillCard.Title>JavaScript</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(0, 122, 204, 1)">
            <Typescript color="#fff" size={'auto'} />
            <SkillCard.Title>TypeScript</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(51, 153, 51, 1)">
            <NodeDotJs color="#fff" size={'auto'} />
            <SkillCard.Title>Node.js</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(225, 0, 152, 1)">
            <Graphql color="#fff" size={'auto'} />
            <SkillCard.Title>Graphql</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="#000">
            <Markdown color="#fff" size={'auto'} />
            <SkillCard.Title>Markdown</SkillCard.Title>
          </SkillCard>
          <SkillCard>
            <Json color="#fff" size={'auto'} />
            <SkillCard.Title>JSON</SkillCard.Title>
          </SkillCard>
        </SkillSection.Grid>
      </SkillSection>
      <SkillSection>
        <SkillSection.Title>Frontend Tools</SkillSection.Title>
        <SkillSection.Grid>
          <SkillCard color="#fff" backgroundColor="rgba(203, 56, 55, 1)">
            <Npm color="#fff" size={'auto'} />
            <SkillCard.Title>npm</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(44, 142, 187, 1)">
            <Yarn color="#fff" size={'auto'} />
            <SkillCard.Title>Yarn</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#000" backgroundColor="rgba(249, 220, 62, 1)">
            <Babel color="#000" size={'auto'} />
            <SkillCard.Title>Babel</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#000" backgroundColor="rgba(247, 185, 62, 1)">
            <Prettier color="#000" size={'auto'} />
            <SkillCard.Title>Prettier</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(75, 50, 195, 1)">
            <Eslint color="#fff" size={'auto'} />
            <SkillCard.Title>Eslint</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(0, 35, 85, 1)">
            <Webpack color="#fff" size={'auto'} />
            <SkillCard.Title>Webpack</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(255, 71, 133, 1)">
            <Storybook color="#fff" size={'auto'} />
            <SkillCard.Title>Storybook</SkillCard.Title>
          </SkillCard>
        </SkillSection.Grid>
      </SkillSection>
      <SkillSection>
        <SkillSection.Title>Testing</SkillSection.Title>
        <SkillSection.Grid>
          <SkillCard color="#fff" backgroundColor="rgba(194, 19, 37, 1)">
            <Jest color="#fff" size={'auto'} />
            <SkillCard.Title>Jest</SkillCard.Title>
          </SkillCard>
        </SkillSection.Grid>
      </SkillSection>
      <SkillSection>
        <SkillSection.Title>Frameworks & Libraries</SkillSection.Title>
        <SkillSection.Grid>
          <SkillCard backgroundColor="rgba(32, 35, 42, 1)">
            <ReactJs color="#61DAFB" size={'auto'} />
            <SkillCard.Title>React</SkillCard.Title>
          </SkillCard>
          <SkillCard backgroundColor="rgba(102, 51, 153, 1)">
            <Gatsby color="#fff" size={'auto'} />
            <SkillCard.Title>Gatsby</SkillCard.Title>
          </SkillCard>
          <SkillCard>
            <NextDotJs color="#fff" size={'auto'} />
            <SkillCard.Title>Next.js</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(49, 28, 135, 1)">
            <Apollographql color="#fff" size={'auto'} />
            <SkillCard.Title>Apollo Graphql</SkillCard.Title>
          </SkillCard>
        </SkillSection.Grid>
      </SkillSection>
      <SkillSection>
        <SkillSection.Title>Front-end</SkillSection.Title>
        <SkillSection.Grid>
          <SkillCard backgroundColor="rgba(32, 35, 42, 1)">
            <ReactJs color="#61DAFB" size={'auto'} />
            <SkillCard.Title>React</SkillCard.Title>
          </SkillCard>
          <SkillCard backgroundColor="rgba(102, 51, 153, 1)">
            <Gatsby color="#fff" size={'auto'} />
            <SkillCard.Title>Gatsby</SkillCard.Title>
          </SkillCard>
          <SkillCard>
            <NextDotJs color="#fff" size={'auto'} />
            <SkillCard.Title>Next.js</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#000" backgroundColor="rgba(247, 223, 30, 1)">
            <Javascript color="#000" size={'auto'} />
            <SkillCard.Title>JavaScript</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(0, 122, 204, 1)">
            <Typescript color="#fff" size={'auto'} />
            <SkillCard.Title>TypeScript</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(21, 114, 182, 1)">
            <Css3 color="#fff" size={'auto'} />
            <SkillCard.Title>CSS3</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(204, 102, 153, 1)">
            <Sass color="#fff" size={'auto'} />
            <SkillCard.Title>Sass</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(240, 80, 50, 1)">
            <Git color="#fff" size={'auto'} />
            <SkillCard.Title>Git</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(1, 151, 51, 1)">
            <Vim color="#fff" size={'auto'} />
            <SkillCard.Title>Vim</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(194, 19, 37, 1)">
            <Jest color="#fff" size={'auto'} />
            <SkillCard.Title>Jest</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(44, 142, 187, 1)">
            <Yarn color="#fff" size={'auto'} />
            <SkillCard.Title>Yarn</SkillCard.Title>
          </SkillCard>
          <SkillCard>
            <Json color="#fff" size={'auto'} />
            <SkillCard.Title>JSON</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(227, 79, 38, 1)">
            <Html5 color="#fff" size={'auto'} />
            <SkillCard.Title>HTML5</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#000" backgroundColor="rgba(252, 198, 36, 1)">
            <Linux color="#000" size={'auto'} />
            <SkillCard.Title>Linux</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#000" backgroundColor="rgba(249, 220, 62, 1)">
            <Babel color="#000" size={'auto'} />
            <SkillCard.Title>Babel</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(51, 103, 145, 1)">
            <Postgresql color="#fff" size={'auto'} />
            <SkillCard.Title>Postgresql</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(118, 74, 188, 1)">
            <Redux color="#fff" size={'auto'} />
            <SkillCard.Title>Redux</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(36, 150, 237, 1)">
            <Docker color="#fff" size={'auto'} />
            <SkillCard.Title>Docker</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(75, 50, 195, 1)">
            <Eslint color="#fff" size={'auto'} />
            <SkillCard.Title>Eslint</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(24, 23, 23, 1)">
            <Github color="#fff" size={'auto'} />
            <SkillCard.Title>GitHub</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(240, 31, 122, 1)">
            <Codecov color="#fff" size={'auto'} />
            <SkillCard.Title>Codecov</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(225, 0, 152, 1)">
            <Graphql color="#fff" size={'auto'} />
            <SkillCard.Title>Graphql</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(255, 108, 55, 1)">
            <Postman color="#fff" size={'auto'} />
            <SkillCard.Title>Postman</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(51, 153, 51, 1)">
            <NodeDotJs color="#fff" size={'auto'} />
            <SkillCard.Title>Node.js</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(71, 162, 72, 1)">
            <Mongodb color="#fff" size={'auto'} />
            <SkillCard.Title>Mongodb</SkillCard.Title>
          </SkillCard>
          <SkillCard
            color="rgba(51, 70, 35, 1)"
            backgroundColor="rgba(133, 234, 45, 1)"
          >
            <Swagger color="rgba(51, 70, 35, 1)" size={'auto'} />
            <SkillCard.Title>Swagger</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(0, 35, 85, 1)">
            <Webpack color="#fff" size={'auto'} />
            <SkillCard.Title>Webpack</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#000" backgroundColor="rgba(247, 185, 62, 1)">
            <Prettier color="#000" size={'auto'} />
            <SkillCard.Title>Prettier</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(78, 170, 37, 1)">
            <Gnubash color="#fff" size={'auto'} />
            <SkillCard.Title>Gnubash</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="#000">
            <Markdown color="#fff" size={'auto'} />
            <SkillCard.Title>Markdown</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(255, 71, 133, 1)">
            <Storybook color="#fff" size={'auto'} />
            <SkillCard.Title>Storybook</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(23, 147, 209, 1)">
            <Archlinux color="#fff" size={'auto'} />
            <SkillCard.Title>Arch Linux</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(1, 1, 1, 1)">
            <SocketDotIo color="#fff" size={'auto'} />
            <SkillCard.Title>Socket.io</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(50, 108, 229, 1)">
            <Kubernetes color="#fff" size={'auto'} />
            <SkillCard.Title>Kubernetes</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(13, 89, 127, 1)">
            <Alpinelinux color="#fff" size={'auto'} />
            <SkillCard.Title>Alpine Linux</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(32, 136, 255, 1)">
            <Githubactions color="#fff" size={'auto'} />
            <SkillCard.Title>Github Actions</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(49, 28, 135, 1)">
            <Apollographql color="#fff" size={'auto'} />
            <SkillCard.Title>Apollo Graphql</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff">
            <Jsonwebtokens color="#fff" size={'auto'} />
            <SkillCard.Title>JWT</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(0, 122, 204, 1)">
            <Visualstudiocode color="#fff" size={'auto'} />
            <SkillCard.Title>VS Code</SkillCard.Title>
          </SkillCard>
        </SkillSection.Grid>
      </SkillSection>
    </Layout>
  )
}

export default index
