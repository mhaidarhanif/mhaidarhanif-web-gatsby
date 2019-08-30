import React from 'react'
import styled from '@emotion/styled'

const StyledParagraph = styled.p`
  font-size: 25px;
  line-height: 35px;
`

const Paragraph = props => {
  return <StyledParagraph>{props.children}</StyledParagraph>
}

export default Paragraph
