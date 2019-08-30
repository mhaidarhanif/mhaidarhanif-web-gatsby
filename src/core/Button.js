import React from 'react'
import styled from '@emotion/styled'

import colors from '../styles/colors.json'

const Button = ({ shadow, color, backgroundColor, children }) => {
  const StyledButton = styled.button`
    box-shadow: ${props => props.shadow && '4px 4px 4px hsla(0, 0%, 0%, 0.25)'};
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
    padding: 11px 30px;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  `

  return (
    <StyledButton shadow={shadow} color={color}>
      {children}
    </StyledButton>
  )
}

export default Button
