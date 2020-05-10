import { h } from 'preact'
import styled from '@xstyled/emotion'

import LinkButtons from './LinkButtons'
import LinkButton from './LinkButton'

const SectionIntroContainer = styled.section`
  margin: 120px 0;
`

const SectionIntroRow = styled.div`
  margin: 15px 0;
`

const IntroTitle = styled.h2`
  margin: 0;
  font-size: 48px;
`

const IntroParagraph = styled.p`
  max-width: 600px;
`

const Topics = styled.div``

const SectionIntro = () => (
  <SectionIntroContainer>
    <SectionIntroRow>
      <IntroTitle>Solving world problems, together</IntroTitle>
      <IntroParagraph>
        Earth and human have many problems. Including ours. We just have to get
        more people to solve them. If you are one of the people who care to make
        a difference, let’s collaborate together.
      </IntroParagraph>
      <LinkButtons>
        <LinkButton href='/collaborate' variant='primary'>
          Collaborate with Haidar
        </LinkButton>
      </LinkButtons>
    </SectionIntroRow>

    <SectionIntroRow>
      <Topics></Topics>
    </SectionIntroRow>
  </SectionIntroContainer>
)

export default SectionIntro
