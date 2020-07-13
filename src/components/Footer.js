import React from "react"
import styled from "@xstyled/emotion"

import Anchor from "../components/Anchor"

import socials from "../data/socials.json"

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin: 50px 0;
`

const SocialContainer = styled.section`
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
      <div>
        <h3>Connect on Social Media</h3>
      </div>
      <SocialContainer>
        <SocialItems>
          {socials.map(({ name, url }, index) => {
            return (
              <SocialItem key={index}>
                <Anchor href={url} target="_blank" rel="noopener noreferrer">
                  {name}
                </Anchor>
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
