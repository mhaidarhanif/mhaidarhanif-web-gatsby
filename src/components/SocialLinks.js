import React from 'react'
import styled from '@emotion/styled'

import socials from '../data/socials.json'

const StyledSocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`

const SocialLink = styled.a`
  margin: 0 10px;
`

const SocialImage = styled.img`
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      {socials.map((social, index) => {
        return (
          <SocialLink key={index} href={social.url} target="_blank">
            <SocialImage src={`/icons/${social.image}`} alt={social.name} />
          </SocialLink>
        )
      })}
    </StyledSocialLinks>
  )
}

export default SocialLinks
