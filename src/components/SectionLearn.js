import React from 'react'

import Section from '../core/Section'
import Heading from '../core/Heading'

import PostThumbnails from '../components/PostThumbnails'

const SectionSocial = props => {
  return (
    <Section>
      <Heading size={1}>The Learning Resources</Heading>
      <Heading size={2}>
        Useful and important information that I’ve shared and recommended
      </Heading>
      <PostThumbnails />
    </Section>
  )
}

export default SectionSocial
