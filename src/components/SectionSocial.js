import React from 'react'
import styled from '@emotion/styled'

import Section from '../core/Section'

import ContentHeading from './ContentHeading'
import SocialLinks from './SocialLinks'
import DocumentLinks from './DocumentLinks'

const SectionSocial = props => {
  const SocialContent = styled.div`
    background: #e9e7ea;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  return (
    <Section>
      <SocialContent>
        <ContentHeading
          title="The Social Media"
          subtitle="Multiple way of socializing in the 21st century"
        />
        <SocialLinks />
        <DocumentLinks />
      </SocialContent>
    </Section>
  )
}

export default SectionSocial
