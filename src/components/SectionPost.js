import React from 'react'
import styled from '@emotion/styled'

import Section from '../core/Section'

import ContentHeading from './ContentHeading'
import Thumbnails from './Thumbnails'

import colors from '../styles/colors.json'

const SectionPost = props => {
  const PostContent = styled.div`
    background: ${colors.white.b};
    background-image: url('/images/posts-background.jpg');
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 1200px;
  `

  const ContentList = styled.div`
    display: flex;
    justify-content: center;
    width: 1400px;
  `

  return (
    <Section>
      <PostContent>
        <ContentHeading
          title="The Learning Resources"
          subtitle="Useful and important information that I’ve shared and recommended"
        />
        <ContentList>
          <Thumbnails />
        </ContentList>
      </PostContent>
    </Section>
  )
}

export default SectionPost
