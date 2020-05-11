import React from "react"
import { breakpoints } from "@xstyled/system"
import styled, { css } from "@xstyled/emotion"

const SectionContainer = styled.section`
  ${breakpoints({
    xs: css`
      margin: 30px 0;
      margin-bottom: 60px;
    `,
    lg: css`
      margin: 50px 0;
      margin-bottom: 100px;
    `,
  })}
`

const Section = ({ children }) => (
  <SectionContainer>{children}</SectionContainer>
)

export default Section
