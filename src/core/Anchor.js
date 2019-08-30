import React from 'react'
import styled from '@emotion/styled'

import colors from '../styles/colors.json'

const StyledAnchor = styled.a`
  color: ${colors.blue.b};
  font-weight: bold;
  position: relative;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    color: ${colors.blue.c};
  }
  &:active {
    color: ${colors.blue.a};
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${colors.blue.c};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`

const Anchor = ({ href, children }) => {
  return (
    <StyledAnchor href={href} target="_blank">
      {children}
    </StyledAnchor>
  )
}

export default Anchor
