import React from "react"
import styled from "@xstyled/emotion"

const SectionContainer = styled.section`
  margin: 80px 0;
`

const Section = ({ children }) => (
  <SectionContainer>{children}</SectionContainer>
)

export default Section
