import React from 'react'
import styled from '@emotion/styled'

import colors from '../styles/colors.json'

const StyledParagraph = styled.p`
  color: ${props => {
    switch (props.color) {
      case 'gray':
        return colors.black.c
      case 'white':
        return colors.white.c
      default:
        return colors.black.a
    }
  }};
  font-weight: ${props => props.bold && 'bold'};
  font-size: 25px;
  line-height: 35px;
  margin-bottom: 15px;
  text-transform: ${props => props.uppercase && 'uppercase'};
`

const Paragraph = ({ color, bold, uppercase, children }) => {
  return (
    <StyledParagraph color={color} bold={bold} uppercase={uppercase}>
      {children}
    </StyledParagraph>
  )
}

export default Paragraph
