import { h } from 'preact'
import { breakpoints } from '@xstyled/system'
import styled, { css } from '@xstyled/emotion'

const LinkButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  a:nth-of-type(n + 1) {
    margin-right: 15px;

    ${breakpoints({
      xs: css`
        margin-top: 15px;
      `,
      lg: css`
        margin-top: 0;
      `,
    })}
  }
`

export default LinkButtons
