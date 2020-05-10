import { h } from 'preact'
import { breakpoints } from '@xstyled/system'
import styled, { css } from '@xstyled/emotion'
import Helmet from 'preact-helmet'

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
  const baseUrl = `https://mhaidarhanif.com/`
  const title = `M Haidar Hanif`
  const description = `Educator, Engineer, Entrepreneur. Mentoring aspiring professional web and software developers, worldwide.`
  const imageUrl = baseUrl + `assets/og-image.jpg`
  const url = baseUrl

  return (
    <LayoutContainer>
      <Helmet
        htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
        title={title}
        defaultTitle={title}
        titleAttributes={{ itemprop: 'name', lang: 'en' }}
        meta={[
          { name: 'description', content: description },
          { property: 'og:title', content: title },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: url },
        ]}
        link={[
          { rel: 'canonical', href: url },
          {
            rel: 'apple-touch-icon',
            href: '/assets/icons/apple-touch-icon-57x57.png',
          },
          {
            rel: 'apple-touch-icon',
            sizes: '72x72',
            href: '/assets/icons/apple-touch-icon-72x72.png',
          },
        ]}
      />

      {children}
    </LayoutContainer>
  )
}

export default Layout
