import React from "react"
import { breakpoints } from "@xstyled/system"
import styled, { css } from "@xstyled/emotion"

const SectionContainer = styled.section`
  ${breakpoints({
    xs: css`
      margin: 30px 0;
    `,
    lg: css`
      margin: 50px 0;
    `,
  })}
`

const Section = ({ children }) => (
  <SectionContainer>{children}</SectionContainer>
)

export default Section
