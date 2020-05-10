import { h } from 'preact'
import { breakpoints } from '@xstyled/system'
import styled, { css } from '@xstyled/emotion'

import Header from './Header'
import Footer from './Footer'

const LayoutContainer = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  ${breakpoints({
    xs: css`
      padding: 20px;
    `,
    lg: css`
      width: 960px;
    `,
  })}
`

const Layout = ({ children }) => <LayoutContainer>{children}</LayoutContainer>

export default Layout
