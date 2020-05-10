import { h } from 'preact'
import { Link } from 'preact-router/match'
import styled, { css } from '@xstyled/emotion'
import { variant } from '@xstyled/system'

const Button = styled.button``

const LinkButton = styled(Link)`
  ${variant({
    default: 'primary',
    variants: {
      primary: css`
        color: #000000;
        background-color: #f2c94c;
      `,
      secondary: css`
        color: #f2c94c;
        background-color: #222222;
      `,
    },
  })}
  &:hover {
    opacity: 0.8;
  }
  transition: opacity 0.2s ease-in-out;
  padding: 10px 20px;
  border-radius: 5px;
`

export default LinkButton
