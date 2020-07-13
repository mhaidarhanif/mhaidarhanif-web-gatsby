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
  padding: 30px 0;
`

const SectionIntro = () => (
  <Section>
    <Container>
      <Row>
        <Title>Solving world problems, together</Title>
        <Paragraph>
          Let's solve world's problems. If you are one of the people who care to
          make a difference, we can collaborate together.
        </Paragraph>
        <LinkButtons>
          <LinkButton to="/contact" variant="primary">
            Connect and Collaborate
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
