import { breakpoints } from "@xstyled/system"
import styled, { css } from "@xstyled/emotion"

const LinkButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1em;

  ${breakpoints({
    xs: css`
      flex-direction: column;
      align-items: flex-start;
    `,
    lg: css`
      flex-direction: row;
    `,
  })}

  a {
    margin-right: 20px;
  }

  a:nth-of-type(2n) {
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
