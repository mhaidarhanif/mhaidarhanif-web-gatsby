import React from 'react'

import Section from '../core/Section'
import Heading from '../core/Heading'
import Paragraph from '../core/Paragraph'

const SectionIntro = props => {
  return (
    <Section>
      <Heading text="Hi, I’m Haidar" />
      <Paragraph>
        An innovator, educator, and software engineer using a variety of
        software technologies.
      </Paragraph>
      <Paragraph>
        In the last 10 years I’ve been building software applications and
        educating people about innovation and software engineering, so they can{' '}
        <b>start and improve their career</b>: solve a problem with efficiency,
        get a job, grow a community, or even build their own company.
      </Paragraph>
      <Paragraph>
        I built <a href="https://impactbyte.com">Impact Byte</a>, a prominent
        coding and career school in Indonesia that has been running for 2+ years
        with more than 100 alumni from various kinds of backgrounds.
      </Paragraph>
      <Paragraph>
        This 2019 as a founder, I currently developing <b>something new</b> that
        is based in Malaysia, for a worldwide audience. A global learning
        platform for enthusiasts and aspiring professionals.
      </Paragraph>
      <Paragraph>
        Subscribe to get the updates and advice for your situation.
      </Paragraph>

      <img src="/images/intro-haidar.png" alt="Intro Haidar" />
      <img src="/images/intro-background.jpg" alt="Intro Background" />
    </Section>
  )
}

export default SectionIntro
