import React from 'react'
import styled from '@emotion/styled'

import Section from '../core/Section'

import ContentHeading from '../components/ContentHeading'

import colors from '../styles/colors.json'

const SectionTech = props => {
  const PostContent = styled.div`
    background: ${colors.white.c};
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const TechList = styled.div``

  return (
    <Section>
      <PostContent>
        <ContentHeading
          title="The Treasure Chest"
          subtitle="Tools and technologies I use daily for work and fun"
        />
        <TechList>
          <img src="/images/technologies.png" alt="Technologies" />
        </TechList>
      </PostContent>
    </Section>
  )
}

export default SectionTech
