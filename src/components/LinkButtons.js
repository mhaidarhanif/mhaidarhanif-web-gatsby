import { h } from 'preact'
import styled from '@xstyled/emotion'

const LinkButtons = styled.div`
  display: flex;
  margin-top: 15px;
  a:nth-of-type(n + 2) {
    margin: 0 15px;
  }
`

export default LinkButtons
