import React from 'react'
import styled from '@emotion/styled'

const StyledHeading1 = styled.h1``
const StyledHeading2 = styled.h2``
const StyledHeading3 = styled.h3``
const StyledHeading4 = styled.h4``
const StyledHeading5 = styled.h5``
const StyledHeading6 = styled.h6``

const Heading = ({ size, children }) => {
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
