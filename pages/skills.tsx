import {Layout, SkillCard} from '@components'
import {ReactJs} from '@icons-pack/react-simple-icons'
import React from 'react'

export const index: React.FC = () => {
  return (
    <Layout title="Skills | vishu.io">
      <SkillCard color="rgba(32, 35, 42, 1)">
        <ReactJs color="#61DAFB" size={50} />
      </SkillCard>
    </Layout>
  )
}

export default index
