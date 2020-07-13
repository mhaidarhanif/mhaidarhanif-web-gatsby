import React from "react"
import { breakpoints } from "@xstyled/system"
import styled, { css } from "@xstyled/emotion"

import Accent from "./Accent"
import Section from "./Section"
import Paragraph from "./Paragraph"
import LinkButtons from "./LinkButtons"
import LinkButton from "./LinkButton"

import HaidarPhoto from "./HaidarPhoto"

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  ${breakpoints({
    xs: css`
      flex-direction: column;
    `,
    md: css`
      flex-direction: row;
    `,
  })}
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${breakpoints({
    xs: css`
      margin-bottom: 60px;
    `,
    md: css`
      margin-bottom: 0;
    `,
  })}
`

const TitleSpecial = styled.h1`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  letter-spacing: 0.05em;
  line-height: 1.4em;
  margin: 0;
  ${breakpoints({
    xs: css`
      font-size: 3em;
    `,
    md: css`
      font-size: 3.5em;
    `,
  })}
`

const Texts = styled.div`
  padding-right: 30px;
`

const SectionHero = () => (
  <Section>
    <Container>
      <Column>
        <TitleSpecial>
          <Accent></Accent>
          <span>Educator</span>
          <span>Engineer</span>
          <span>Explorer</span>
        </TitleSpecial>

        <Texts>
          <Paragraph>
            Haidar is a seasoned tech educator and engineer in the world of
            software engineering and web development. Currently he focuses on
            helping people to start and grow their career in the modern software
            industry.
          </Paragraph>

          <LinkButtons>
            <LinkButton to="/contact" variant="primary">
              Contact Haidar
            </LinkButton>
          </LinkButtons>
        </Texts>
      </Column>

      <Column>
        <HaidarPhoto />
      </Column>
    </Container>
  </Section>
)

export default SectionHero
