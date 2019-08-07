import React, { Fragment } from 'react'

import Section from '../core/Section'
import Heading from '../core/Heading'

import SocialIcons from './SocialIcons'

const SectionSocial = props => {
  return (
    <Section>
      <Heading size={1}>The Social Media</Heading>
      {!props.simple && (
        <Heading size={2}>
          Multiple way of socializing in the 21st century
        </Heading>
      )}
      <SocialIcons />
      {!props.simple && (
        <Fragment>
          <a href="https://google.com">RESUME</a>
          <span> · </span>
          <a href="https://google.com">SERP</a>
        </Fragment>
      )}
    </Section>
  )
}

export default SectionSocial
