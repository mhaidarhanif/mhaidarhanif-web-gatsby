import React from 'react'
import styled from '@emotion/styled'

import Section from '../core/Section'
import Quote from '../core/Quote'

import colors from '../styles/colors.json'

const SectionQuoteElon = props => {
  const QuoteContent = styled.div`
    background: ${colors.black.a};
    background: linear-gradient(hsla(0, 0%, 0%, 0.5), hsla(0, 0%, 0%, 0.5)),
  url('/images/quote.jpg') no-repeat center;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${colors.white.c};
    padding: 100px 20px;
    display: flex;
    justify-content: flex-end;
}
  `

  return (
    <Section>
      <QuoteContent>
        <Quote
          text="When something is important enough, you do it even if the odds are not
        in your favor."
          author="Elon Musk"
        />
      </QuoteContent>
    </Section>
  )
}

export default SectionQuoteElon
