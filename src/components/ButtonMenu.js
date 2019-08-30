import React from 'react'
import styled from '@emotion/styled'

const StyledButtonMenu = styled.button`
  background: none;
  border: none;
  padding: 0;
`

const Icon = styled.img``

const ButtonMenu = ({ image, text }) => {
  return (
    <StyledButtonMenu>
      <Icon src="/icons/burger.svg"></Icon>
    </StyledButtonMenu>
  )
}

export default ButtonMenu
