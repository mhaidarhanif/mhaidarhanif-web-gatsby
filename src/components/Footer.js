import React from "react"
import styled from "@xstyled/emotion"

const FooterContainer = styled.footer`
  display: flex;
  padding: 50px;
  justify-content: center;
  color: #222222;
`

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <FooterContainer>
      <p>© {year} M Haidar Hanif</p>
    </FooterContainer>
  )
}

export default Footer
