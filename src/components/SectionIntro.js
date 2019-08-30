import React from 'react'
import styled from '@emotion/styled'

import Section from '../core/Section'
import Paragraph from '../core/Paragraph'
import Anchor from '../core/Anchor'

import colors from '../styles/colors.json'

const IntroContent = styled.div`
  display: flex;
`

const IntroText = styled.div`
  max-width: 800px;
  margin-left: 100px;
  margin-top: 100px;
`

const IntroHeading = styled.h2`
  font-family: 'Overlock', sans-serif;
  font-size: 3.5em;
  color: ${colors.cyan.b};
  margin-bottom: 20px;
`

const IntroImage = styled.div`
  max-width: 800px;
  margin-left: 100px;
  margin-top: 100px;
`

const Image = styled.img`
  display: block;
`

const SectionIntro = props => {
  return (
    <Section>
      <IntroContent>
        <IntroText>
          <IntroHeading>Hi, I’m Haidar</IntroHeading>
          <Paragraph>
            An innovator, educator, and software engineer using a variety of
            software technologies.
          </Paragraph>
          <Paragraph>
            In the last 10 years I’ve been building software applications and
            educating people about innovation and software engineering, so they
            can <b>start and improve their career</b>: solve a problem with
            efficiency, get a job, grow a community, or even build their own
            company.
          </Paragraph>
          <Paragraph>
            I built <Anchor href="https://impactbyte.com">Impact Byte</Anchor>,
            a prominent coding and career school in Indonesia that has been
            running for 2+ years with more than 100 alumni from various kinds of
            backgrounds.
          </Paragraph>
          <Paragraph>
            This 2019 as a founder, I currently developing <b>something new</b>{' '}
            that is based in Malaysia, accessible for a worldwide audience. A
            global learning platform for enthusiasts and aspiring professionals.
          </Paragraph>
          <Paragraph>If you are interested, subscribe below.</Paragraph>
        </IntroText>

        <IntroImage>
          <Image src="/images/intro-haidar.png" alt="Intro Haidar" />
        </IntroImage>
      </IntroContent>
    </Section>
  )
}

export default SectionIntro
