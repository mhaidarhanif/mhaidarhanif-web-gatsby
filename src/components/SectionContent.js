import React from "react"
import PropTypes from "prop-types"
import { breakpoints } from "@xstyled/system"
import styled, { css } from "@xstyled/emotion"

import Section from "../components/Section"
import Accent from "../components/Accent"

const Header = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`

const Title = styled.h1`
  margin: 0;
  ${breakpoints({
    xs: css`
      font-size: 3em;
    `,
    lg: css`
      font-size: 3.5em;
    `,
  })}
`

const Date = styled.time`
  font-size: 1.5em;
  color: #555555;
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
  h2 {
    padding-top: 30px;
    padding-bottom: 10px;
    border-bottom: 2px solid #222222;
  }
`

const SectionContent = ({ title, date, children }) => (
  <Section>
    <Article>
      <Header>
        <Accent />
        <Title>{title}</Title>
        <Date datetime={date}>{date}</Date>
      </Header>

      <Content>{children}</Content>
    </Article>
  </Section>
)

SectionContent.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default SectionContent
