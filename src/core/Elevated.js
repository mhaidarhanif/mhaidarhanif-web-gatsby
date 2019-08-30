import React from 'react'
import styled from '@emotion/styled'

const StyledElevated = styled.div`
  z-index: 10;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  margin-bottom: 15px;
`

const Elevated = ({ children }) => {
  return <StyledElevated>{children}</StyledElevated>
}

export default Elevated
