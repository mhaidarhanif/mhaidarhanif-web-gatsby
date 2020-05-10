import { h } from 'preact'
import styled from '@xstyled/emotion'

const LayoutContainer = styled.main`
  width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const Layout = ({ children }) => <LayoutContainer>{children}</LayoutContainer>

export default Layout
