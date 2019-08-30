import React from 'react'
import styled from '@emotion/styled'

import Footer from '../core/Footer'
import Paragraph from '../core/Paragraph'
import SocialLinks from '../components/SocialLinks'

import colors from '../styles/colors.json'
import date from '../helpers/date'

const SectionFooter = () => {
  const StyledFooterContent = styled.div`
    background: ${props =>
      props.image
        ? `linear-gradient(hsla(0, 0%, 100%, 1), hsla(0, 0%, 0%, 0.75)),
  url("${props.image}") no-repeat center`
        : 'none'};
    background-color: hsla(0, 0%, 0%, 0);
    background-size: cover;
    color: ${colors.black.c};
    padding: 20px 40px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `

  const Credits = styled.div`
    color: ${colors.white.c};
    display: flex;
    justify-content: space-between;
    width: 100%;
  `

  const CreditsDivider = styled.div``

  const CreditsLink = styled.a`
    color: ${colors.white.c};
  `

  return (
    <Footer>
      <StyledFooterContent image="/images/footer.jpg">
        <SocialLinks />

        <Credits>
          <CreditsDivider>
            <Paragraph bold color="white">
              M Haidar Hanif &copy; 2010-2019 All rights reserved
            </Paragraph>
            <Paragraph color="gray">
              Website made with modern JavaScript, React, Redux, and Node.js
            </Paragraph>
          </CreditsDivider>
          <CreditsDivider>
            <Paragraph bold color="white">
              <CreditsLink href="">Terms &amp; Conditions</CreditsLink>
              <span> · </span>
              <CreditsLink href="">Privacy Policy</CreditsLink>
            </Paragraph>
            <Paragraph uppercase color="gray">
              Good {date.getDayName()}! さらに向こうへ！
            </Paragraph>
          </CreditsDivider>
        </Credits>
      </StyledFooterContent>
    </Footer>
  )
}

export default SectionFooter
