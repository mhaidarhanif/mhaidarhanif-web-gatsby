import React from "react"
import styled from "@xstyled/emotion"

import socials from "../data/socials.json"

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`

const SocialContainer = styled.section`
  margin: 50px 0;
  display: flex;
  justify-content: center;
`

const SocialItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  color: #f2c94c;
  list-style-type: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  li {
    margin: 10px;
    a {
      transition: opacity 0.2s ease-in-out;
      &:hover {
        opacity: 0.5;
      }
    }
  }
`

const SocialItem = styled.li``

const Copyright = styled.p`
  color: #222222;
`

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <FooterContainer>
      <SocialContainer>
        <SocialItems>
          {socials.map(({ name, url }, index) => {
            return (
              <SocialItem key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              </SocialItem>
            )
          })}
        </SocialItems>
      </SocialContainer>

      <Copyright>© {year} M Haidar Hanif</Copyright>
    </FooterContainer>
  )
}

export default Footer
