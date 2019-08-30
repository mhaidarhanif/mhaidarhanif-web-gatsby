import React from 'react'
import styled from '@emotion/styled'

import colors from '../styles/colors.json'

const StyledButton = styled.button`
  color: ${props => {
    switch (props.color) {
      case 'white':
        return colors.white.c
      case 'cyan':
        return colors.white.c
      case 'lime':
        return colors.green.a
      default:
        return colors.black.a
    }
  }};
  background-color: ${props => {
    switch (props.color) {
      case 'white':
        return colors.black.c
      case 'cyan':
        return colors.cyan.b
      case 'lime':
        return colors.lime.c
      default:
        return colors.white.a
    }
  }};
  border-radius: 5px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.2px;
  padding: 10px 20px;
  text-transform: uppercase;
`

const Button = ({ children, color, backgroundColor }) => {
  return <StyledButton color={color}>{children}</StyledButton>
}

export default Button
