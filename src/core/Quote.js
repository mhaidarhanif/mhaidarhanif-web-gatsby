import React from 'react'
import styled from '@emotion/styled'

const Quote = props => {
  const BlockQuote = styled.blockquote`
    font-family: 'Caveat', sans-serif;
    text-align: right;
    max-width: 940px;
  `

  const QuoteText = styled.p`
    font-size: 3.2em;
  `

  const QuoteAuthor = styled.p`
    font-size: 3em;
  `

  return (
    <BlockQuote>
      <QuoteText>“{props.text}”</QuoteText>
      {props.author && <QuoteAuthor>— {props.author}</QuoteAuthor>}
    </BlockQuote>
  )
}

export default Quote
