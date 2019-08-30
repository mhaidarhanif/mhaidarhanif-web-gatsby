import React from 'react'
import styled from '@emotion/styled'

import Anchor from '../core/Anchor'

import colors from '../styles/colors.json'

const StyledDocumentLinks = styled.div`
  align-items: center;
  color: ${colors.cyan.b};
  display: flex;
  flex-direction: row;
  font-weight: bold;
  margin: 20px 0;
`

const DocumentLink = styled.span`
  font-size: 1.5em;
  margin: 0 10px;
`

const Span = styled.span`
  /* margin: 0 10px; */
`

const DocumentLinks = () => {
  return (
    <StyledDocumentLinks>
      <DocumentLink>
        <Anchor href="https://stackoverflow.com/cv/mhaidarh">CV</Anchor>
      </DocumentLink>
      <Span> · </Span>
      <DocumentLink>
        <Anchor href="https://stackoverflow.com/story/mhaidarh">Story</Anchor>
      </DocumentLink>
      <Span> · </Span>
      <DocumentLink>
        <Anchor href="https://www.google.com/search?q=M+Haidar+Hanif">
          SERP
        </Anchor>
      </DocumentLink>
    </StyledDocumentLinks>
  )
}

export default DocumentLinks
