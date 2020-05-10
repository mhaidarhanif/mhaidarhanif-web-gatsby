import { h } from 'preact'
import styled from '@xstyled/emotion'

import LinkButton from './LinkButton'

const SectionHeroContainer = styled.section`
  display: flex;
  margin: 50px 0;
`

const SectionHeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
`

const SectionHeroPhoto = styled.div``

const HeroTitleAccent = styled.div`
  background-color: #f2c94c;
  height: 5px;
  width: 100px;
  border-radius: 10px;
`

const HeroTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  font-size: 72px;
  letter-spacing: 0.05em;
  margin: 0;
`

const HeroTexts = styled.div``

const Paragraph = styled.p`
  margin: 15px 0;
  font-size: 18px;
  line-height: 30px;
`

const LinkButtons = styled.div`
  display: flex;
  margin-top: 15px;
  a:nth-of-type(n + 2) {
    margin: 0 15px;
  }
`

const HeroPhoto = styled.img`
  border: 5px solid #222222;
  box-sizing: border-box;
  border-radius: 10px;
  height: 600px;
`

const SectionHero = () => (
  <SectionHeroContainer>
    <SectionHeroText>
      <HeroTitle>
        <HeroTitleAccent></HeroTitleAccent>
        <span>Educator</span>
        <span>Engineer</span>
        <span>Explorer</span>
      </HeroTitle>

      <HeroTexts>
        <Paragraph>
          Haidar is a seasoned tech educator and engineer who mentor people in
          software engineering, web development, and industrial career. Beyond
          that, he’s exploring various experiments to solve world problems.
          Especially helping people’s career in the software industry. Normally
          he doesn’t talk in a 3rd person view.
        </Paragraph>

        <LinkButtons>
          <LinkButton href='/projects' variant='primary'>
            Check His Projects
          </LinkButton>
          <LinkButton href='/contact' variant='secondary'>
            Contact Haidar
          </LinkButton>
        </LinkButtons>
      </HeroTexts>
    </SectionHeroText>

    <SectionHeroPhoto>
      <HeroPhoto src='/assets/mhaidarhanif-photo.jpg' alt='Photo of Haidar' />
    </SectionHeroPhoto>
  </SectionHeroContainer>
)

export default SectionHero
