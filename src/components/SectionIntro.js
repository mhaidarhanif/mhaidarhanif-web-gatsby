import { h } from 'preact'
import styled from '@xstyled/emotion'

import Title from './Title'
import Paragraph from './Paragraph'
import LinkButtons from './LinkButtons'
import LinkButton from './LinkButton'

const Container = styled.section`
  margin: 100px 0;
`

const Row = styled.div`
  margin: 50px 0;
`

const Topics = styled.div``

const SectionIntro = () => (
  <Container>
    <Row>
      <Title>Solving world problems, together</Title>
      <Paragraph>
        Earth and human have many problems. Including ours. We just have to get
        more people to solve them. If you are one of the people who care to make
        a difference, let’s collaborate together.
      </Paragraph>
      <LinkButtons>
        <LinkButton href='/collaborate' variant='primary'>
          Collaborate with Haidar
        </LinkButton>
      </LinkButtons>
    </Row>

    <Row>
      <Topics></Topics>
    </Row>
  </Container>
)

export default SectionIntro
