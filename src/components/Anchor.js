import React from "react"
import styled from "@xstyled/emotion"

const AnchorContainer = styled.a``

const Anchor = ({ href, children }) => (
  <AnchorContainer href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </AnchorContainer>
)

export default Anchor
