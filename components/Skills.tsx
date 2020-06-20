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
  Swagger,
  Typescript,
  Vim,
  Visualstudiocode,
  Webpack,
  Yarn,
} from '@icons-pack/react-simple-icons'
import React from 'react'

import {SkillCard} from './SkillCard'
import {SkillSection} from './SkillSection'

const Skills: React.FC = () => {
  return (
    <div>
      <SkillSection>
        <SkillSection.Title>Core skills</SkillSection.Title>
        <SkillSection.Grid>
          <SkillCard color="#fff" backgroundColor="rgba(227, 79, 38, 1)">
            <Html5 color="#fff" />
            <SkillCard.Title>HTML5</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(21, 114, 182, 1)">
            <Css3 color="#fff" />
            <SkillCard.Title>CSS3</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(204, 102, 153, 1)">
            <Sass color="#fff" />
            <SkillCard.Title>Sass</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#000" backgroundColor="rgba(247, 223, 30, 1)">
            <Javascript color="#000" />
            <SkillCard.Title>JavaScript</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(0, 122, 204, 1)">
            <Typescript color="#fff" />
            <SkillCard.Title>TypeScript</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(51, 153, 51, 1)">
            <NodeDotJs color="#fff" />
            <SkillCard.Title>Node.js</SkillCard.Title>
          </SkillCard>

          <SkillCard color="#fff" backgroundColor="#000">
            <Markdown color="#fff" />
            <SkillCard.Title>Markdown</SkillCard.Title>
          </SkillCard>
          <SkillCard>
            <Json color="#fff" />
            <SkillCard.Title>JSON</SkillCard.Title>
          </SkillCard>
        </SkillSection.Grid>
      </SkillSection>
      <SkillSection>
        <SkillSection.Title>Frontend Tools</SkillSection.Title>
        <SkillSection.Grid>
          <SkillCard color="#fff" backgroundColor="rgba(203, 56, 55, 1)">
            <Npm color="#fff" />
            <SkillCard.Title>npm</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(44, 142, 187, 1)">
            <Yarn color="#fff" />
            <SkillCard.Title>Yarn</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#000" backgroundColor="rgba(249, 220, 62, 1)">
            <Babel color="#000" />
            <SkillCard.Title>Babel</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#000" backgroundColor="rgba(247, 185, 62, 1)">
            <Prettier color="#000" />
            <SkillCard.Title>Prettier</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(75, 50, 195, 1)">
            <Eslint color="#fff" />
            <SkillCard.Title>Eslint</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(0, 35, 85, 1)">
            <Webpack color="#fff" />
            <SkillCard.Title>Webpack</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(255, 71, 133, 1)">
            <Storybook color="#fff" />
            <SkillCard.Title>Storybook</SkillCard.Title>
          </SkillCard>
        </SkillSection.Grid>
      </SkillSection>
      <SkillSection>
        <SkillSection.Title>Testing</SkillSection.Title>
        <SkillSection.Grid>
          <SkillCard color="#fff" backgroundColor="rgba(194, 19, 37, 1)">
            <Jest color="#fff" />
            <SkillCard.Title>Jest</SkillCard.Title>
          </SkillCard>
        </SkillSection.Grid>
      </SkillSection>
      <SkillSection>
        <SkillSection.Title>Frameworks & Libraries</SkillSection.Title>
        <SkillSection.Grid>
          <SkillCard backgroundColor="rgba(32, 35, 42, 1)">
            <ReactJs color="#61DAFB" />
            <SkillCard.Title>React</SkillCard.Title>
          </SkillCard>
          <SkillCard backgroundColor="rgba(102, 51, 153, 1)">
            <Gatsby color="#fff" />
            <SkillCard.Title>Gatsby</SkillCard.Title>
          </SkillCard>
          <SkillCard>
            <NextDotJs color="#fff" />
            <SkillCard.Title>Next.js</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(49, 28, 135, 1)">
            <Apollographql color="#fff" />
            <SkillCard.Title>Apollo Graphql</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(118, 74, 188, 1)">
            <Redux color="#fff" />
            <SkillCard.Title>Redux</SkillCard.Title>
          </SkillCard>
        </SkillSection.Grid>
      </SkillSection>
      <SkillSection>
        <SkillSection.Title>Linux</SkillSection.Title>
        <SkillSection.Grid>
          <SkillCard color="#fff" backgroundColor="rgba(1, 151, 51, 1)">
            <Vim color="#fff" />
            <SkillCard.Title>Vim</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#000" backgroundColor="rgba(252, 198, 36, 1)">
            <Linux color="#000" />
            <SkillCard.Title>Linux</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(13, 89, 127, 1)">
            <Alpinelinux color="#fff" />
            <SkillCard.Title>Alpine Linux</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(23, 147, 209, 1)">
            <Archlinux color="#fff" />
            <SkillCard.Title>Arch Linux</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(78, 170, 37, 1)">
            <Gnubash color="#fff" />
            <SkillCard.Title>Gnubash</SkillCard.Title>
          </SkillCard>
        </SkillSection.Grid>
      </SkillSection>
      <SkillSection>
        <SkillSection.Title>CI/CD & Source control</SkillSection.Title>
        <SkillSection.Grid>
          <SkillCard color="#fff" backgroundColor="rgba(240, 80, 50, 1)">
            <Git color="#fff" />
            <SkillCard.Title>Git</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(24, 23, 23, 1)">
            <Github color="#fff" />
            <SkillCard.Title>GitHub</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(32, 136, 255, 1)">
            <Githubactions color="#fff" />
            <SkillCard.Title>Github Actions</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(240, 31, 122, 1)">
            <Codecov color="#fff" />
            <SkillCard.Title>Codecov</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(36, 150, 237, 1)">
            <Docker color="#fff" />
            <SkillCard.Title>Docker</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(50, 108, 229, 1)">
            <Kubernetes color="#fff" />
            <SkillCard.Title>Kubernetes</SkillCard.Title>
          </SkillCard>
        </SkillSection.Grid>
      </SkillSection>
      <SkillSection>
        <SkillSection.Title>APIs & Tooling</SkillSection.Title>
        <SkillSection.Grid>
          <SkillCard color="#fff" backgroundColor="rgba(225, 0, 152, 1)">
            <Graphql color="#fff" />
            <SkillCard.Title>Graphql</SkillCard.Title>
          </SkillCard>
          <SkillCard
            color="rgba(51, 70, 35, 1)"
            backgroundColor="rgba(133, 234, 45, 1)"
          >
            <Swagger color="rgba(51, 70, 35, 1)" />
            <SkillCard.Title>Swagger</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff">
            <Jsonwebtokens color="#fff" />
            <SkillCard.Title>JWT</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(1, 1, 1, 1)">
            <SocketDotIo color="#fff" />
            <SkillCard.Title>Socket.io</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(235, 84, 36, 1)">
            <Auth0 color="#fff" />
            <SkillCard.Title>Auth0</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(255, 108, 55, 1)">
            <Postman color="#fff" />
            <SkillCard.Title>Postman</SkillCard.Title>
          </SkillCard>
        </SkillSection.Grid>
      </SkillSection>
      <SkillSection>
        <SkillSection.Title>Databases</SkillSection.Title>
        <SkillSection.Grid>
          <SkillCard color="#fff" backgroundColor="rgba(51, 103, 145, 1)">
            <Postgresql color="#fff" />
            <SkillCard.Title>Postgresql</SkillCard.Title>
          </SkillCard>
          <SkillCard color="#fff" backgroundColor="rgba(71, 162, 72, 1)">
            <Mongodb color="#fff" />
            <SkillCard.Title>Mongodb</SkillCard.Title>
          </SkillCard>
        </SkillSection.Grid>
      </SkillSection>
      <SkillSection>
        <SkillSection.Title>IDE</SkillSection.Title>
        <SkillSection.Grid>
          <SkillCard color="#fff" backgroundColor="rgba(0, 122, 204, 1)">
            <Visualstudiocode color="#fff" />
            <SkillCard.Title>VS Code</SkillCard.Title>
          </SkillCard>
        </SkillSection.Grid>
      </SkillSection>
    </div>
  )
}

export default Skills
