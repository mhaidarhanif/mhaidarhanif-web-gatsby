import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import colors from '../styles/colors.json'

const Heading = ({ size, color, children }) => {
  const common = css`
    color: ${color || colors.black.a};
  `

  const StyledHeading1 = styled.h1`
    ${common}
    font-size: 3em;
    margin-bottom: 0.5em;
  `
  const StyledHeading2 = styled.h2`
    ${common}
    font-size: 2em;
    margin-bottom: 0.5em;
  `
  const StyledHeading3 = styled.h3`
    ${common}
  `
  const StyledHeading4 = styled.h4`
    ${common}
  `
  const StyledHeading5 = styled.h5`
    ${common}
  `
  const StyledHeading6 = styled.h6`
    ${common}
  `

  switch (size) {
    case 1:
      return <StyledHeading1>{children}</StyledHeading1>
    case 2:
      return <StyledHeading2>{children}</StyledHeading2>
    case 3:
      return <StyledHeading3>{children}</StyledHeading3>
    case 4:
      return <StyledHeading4>{children}</StyledHeading4>
    case 5:
      return <StyledHeading5>{children}</StyledHeading5>
    case 6:
      return <StyledHeading6>{children}</StyledHeading6>
    default:
      return <StyledHeading1>{children}</StyledHeading1>
  }
}

export default Heading
