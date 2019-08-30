import React from 'react'
import styled from '@emotion/styled'

import colors from '../styles/colors.json'

const StyledAnchorLink = styled.a`
  color: ${colors.blue.b};
  font-weight: bold;
`

const AnchorLink = props => {
  return <StyledAnchorLink>{props.children}</StyledAnchorLink>
}

export default AnchorLink
