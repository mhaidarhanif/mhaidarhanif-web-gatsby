import React from 'react'
import styled from '@emotion/styled'

import colors from '../styles/colors.json'

const StyledButton = styled.button`
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  text-transform: uppercase;
  color: ${props => props.color || colors.black.a};
  background-color: ${props => props.backgroundColor || colors.white.a};
`

const Button = ({ children, color, backgroundColor }) => {
  return (
    <StyledButton color={color} backgroundColor={backgroundColor}>
      {children}
    </StyledButton>
  )
}

export default Button
