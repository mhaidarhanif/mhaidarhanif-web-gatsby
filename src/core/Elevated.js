import React from 'react'
import styled from '@emotion/styled'

const StyledElevated = styled.div`
  z-index: 10;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 10px;
  margin-bottom: 10px;
`

const Elevated = ({ children }) => {
  return <StyledElevated>{children}</StyledElevated>
}

export default Elevated
