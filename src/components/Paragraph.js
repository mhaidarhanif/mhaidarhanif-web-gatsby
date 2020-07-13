import { breakpoints } from "@xstyled/system"
import styled, { css } from "@xstyled/emotion"

const Paragraph = styled.p`
  display: block;
  margin: 20px 0;
  line-height: 1.8em;
  ${breakpoints({
    xs: css`
      font-size: 1em;
      max-width: 500px;
    `,
    lg: css`
      font-size: 1.4em;
      max-width: 700px;
    `,
  })}
`

export default Paragraph
