import React from 'react'
import styled from '@emotion/styled'

import colors from '../styles/colors.json'

const Input = ({ type, name, placeholder, children }) => {
  const StyledInput = styled.input`
    border-radius: 5px;
    border: 2px solid ${colors.gray.c};
    font-size: 20px;
    padding: 10px 0px 10px 10px;
    min-width: 240px;
    margin-right: 20px;

    &::placeholder {
      color: ${colors.white.a};
    }
  `

  return (
    <StyledInput type={type} name={name} placeholder={placeholder}>
      {children}
    </StyledInput>
  )
}

export default Input
