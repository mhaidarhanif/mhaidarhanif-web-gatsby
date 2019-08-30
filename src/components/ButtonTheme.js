import React from 'react'
import styled from '@emotion/styled'

const StyledButtonTheme = styled.button`
  background: none;
  border: none;
  padding: 0;
`

const Icon = styled.img``

const ButtonTheme = ({ image, text }) => {
  return (
    <StyledButtonTheme>
      <Icon src="/icons/moon.svg"></Icon>
    </StyledButtonTheme>
  )
}

export default ButtonTheme
