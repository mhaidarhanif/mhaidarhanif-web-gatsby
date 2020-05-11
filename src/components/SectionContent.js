import React from "react"
import { breakpoints } from "@xstyled/system"
import styled, { css } from "@xstyled/emotion"

import Section from "../components/Section"
import Accent from "../components/Accent"
import Title from "../components/Title"

const Header = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`

const Article = styled.article`
  max-width: 760px;
  margin: 0 auto;
`

const Content = styled.div`
  padding: 30px 0;
  ${breakpoints({
    xs: css`
      font-size: 18px;
      line-height: 30px;
    `,
    lg: css`
      font-size: 21px;
      line-height: 32px;
    `,
  })}
`

const SectionContent = ({ children }) => (
  <Section>
    <Article>
      <Header>
        <Accent />
        <Title>About Haidar</Title>
      </Header>

      <Content>{children}</Content>
    </Article>
  </Section>
)

export default SectionContent
