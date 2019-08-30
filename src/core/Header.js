import React from 'react'
import styled from '@emotion/styled'

const StyledHeader = styled.header``

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>
}

export default Header
