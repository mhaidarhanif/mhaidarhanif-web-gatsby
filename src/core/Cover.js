import React from 'react'
import styled from '@emotion/styled'

import colors from '../styles/colors.json'

const StyledCover = styled.div`
  background: ${props =>
    props.image
      ? `linear-gradient(hsla(0, 0%, 0%, 0.9), hsla(0, 0%, 0%, 0)),
  url("${props.image}") no-repeat center`
      : 'none'};
  background-color: hsla(0, 0%, 0%, 1);
  background-size: cover;
  color: ${colors.white.c};
  padding: 20px;
  min-height: 90vh;
  border-bottom-left-radius: 150% 20%;
  border-bottom-right-radius: 150% 20%;
`

const Cover = ({ image, children }) => {
  return <StyledCover image={image}>{children}</StyledCover>
}

export default Cover
