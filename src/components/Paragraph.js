import { h } from 'preact'
import { breakpoints } from '@xstyled/system'
import styled, { css } from '@xstyled/emotion'

const Paragraph = styled.p`
  display: block;
  line-height: 28px;
  font-size: 0.9em;
  ${breakpoints({
    xs: css`
      font-size: 0.9em;
      max-width: 500px;
    `,
    lg: css`
      font-size: 1.2em;
      max-width: 700px;
    `,
  })}
`

export default Paragraph
