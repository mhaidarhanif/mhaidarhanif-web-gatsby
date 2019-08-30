import React from 'react'
import styled from '@emotion/styled'

import Section from '../core/Section'
import Cover from '../core/Cover'
import Button from '../core/Button'

import Navigation from './Navigation'

import colors from '../styles/colors.json'

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 60vh;
`

const HeaderContent = styled.div`
  max-width: 900px;
  margin: 150px 0;
`

const HeaderHeading = styled.h1`
  font-size: 3em;
`

const SectionHeader = () => {
  return (
    <Section>
      <Cover image={'/images/hero-home.jpg'}>
        <Navigation />
        <Header>
          <HeaderContent>
            <HeaderHeading>
              Let's improve the world, life, work, tech, and education
              altogether
            </HeaderHeading>
            <Button color="cyan">Go Beyond</Button>
          </HeaderContent>
        </Header>
      </Cover>
    </Section>
  )
}

export default SectionHeader
