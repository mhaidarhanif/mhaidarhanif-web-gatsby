import React from 'react'
import styled from '@emotion/styled'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Nav = ({ children }) => {
  return <StyledNav>{children}</StyledNav>
}

export default Nav
