import { h } from 'preact'
import { breakpoints } from '@xstyled/system'
import styled, { css } from '@xstyled/emotion'
import { Helmet } from 'react-helmet'

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

const Layout = ({ children }) => {
  const title = `M Haidar Hanif`
  const description = `Educator, Engineer, Entrepreneur. Mentoring aspiring professional web and software developers, worldwide.`
  const imagePath = `/assets/og-image.jpg`

  return (
    <LayoutContainer>
      <Helmet>
        <title>{title}</title>
        <link rel='canonical' href='https://mhaidarhanif.com' />
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={imagePath} />
      </Helmet>

      {children}
    </LayoutContainer>
  )
}

export default Layout
