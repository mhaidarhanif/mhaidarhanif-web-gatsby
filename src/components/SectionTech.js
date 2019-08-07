import React from 'react'

import Section from '../core/Section'
import Heading from '../core/Heading'

const SectionTech = props => {
  return (
    <Section>
      <Heading size={1}>The Treasure Chest</Heading>
      <Heading size={2}>
        Tools and technologies used daily for work and fun
      </Heading>
      <img src="/images/technologies.png" alt="Technologies" />
    </Section>
  )
}

export default SectionTech
