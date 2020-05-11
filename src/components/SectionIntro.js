import React from "react"
import styled from "@xstyled/emotion"

import Section from "./Section"
import Title from "./Title"
import Paragraph from "./Paragraph"
import LinkButtons from "./LinkButtons"
import LinkButton from "./LinkButton"
import Topics from "./Topics"

const Container = styled.div``

const Row = styled.div`
  padding: 50px 0;
`

const SectionIntro = () => (
  <Section>
    <Container>
      <Row>
        <Title>Solving world problems, together</Title>
        <Paragraph>
          Earth and human have many problems. Including ours. We just have to
          get more people to solve them. If you are one of the people who care
          to make a difference, let’s collaborate together.
        </Paragraph>
        <LinkButtons>
          <LinkButton to="/collaborate" variant="primary">
            Collaborate with Haidar
          </LinkButton>
        </LinkButtons>
      </Row>

      <Row>
        <Topics></Topics>
      </Row>
    </Container>
  </Section>
)

export default SectionIntro
