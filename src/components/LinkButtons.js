import { breakpoints } from "@xstyled/system"
import styled, { css } from "@xstyled/emotion"

const LinkButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1em;
  a:nth-of-type(n + 1) {
    margin-right: 20px;

    ${breakpoints({
      xs: css`
        margin-top: 20px;
      `,
      lg: css`
        margin-top: 0;
      `,
    })}
  }
`

export default LinkButtons
