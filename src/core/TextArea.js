import React from 'react'
import styled from '@emotion/styled'

import colors from '../styles/colors.json'

const TextArea = ({ name, cols, rows, height, placeholder, children }) => {
  const StyledTextArea = styled.textarea`
    border-radius: 5px;
    border: 2px solid ${colors.gray.c};
    font-size: 20px;
    padding: 10px 0px 10px 10px;
    min-width: 240px;
    min-height: ${height}px;

    &::placeholder {
      color: ${colors.white.a};
    }
  `

  return (
    <StyledTextArea
      name={name}
      cols={cols}
      rows={rows}
      height={height}
      placeholder={placeholder}
    >
      {children}
    </StyledTextArea>
  )
}

export default TextArea
