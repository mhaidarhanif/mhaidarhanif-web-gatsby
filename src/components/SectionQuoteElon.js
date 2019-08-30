import React from 'react'
import styled from '@emotion/styled'

import Section from '../core/Section'
import Quote from '../core/Quote'

import colors from '../styles/colors.json'

const SectionQuoteElon = props => {
  const QuoteContent = styled.div`
    background: ${colors.black.a};
    background-image: url('/images/quote.jpg');
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
