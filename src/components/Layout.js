/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css, ThemeProvider } from "@xstyled/emotion"
import { breakpoints } from "@xstyled/system"

import Header from "./Header"
import Footer from "./Footer"

import "./index.css"

const theme = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    primary: "#f2c94c",
    secondary: "#222222",
  },
}

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

const Main = styled.main`
  ${breakpoints({
    lg: css`
      padding-top: 30px;
    `,
  })}
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          shortTitle
          title
        }
      }
    }
  `)

  const mq = window.matchMedia("(min-width: 768px)")
  const siteTitle = mq.matches
    ? data.site.siteMetadata.title
    : data.site.siteMetadata.shortTitle

  return (
    <>
      <ThemeProvider theme={theme}>
        <LayoutContainer>
          <Header siteTitle={siteTitle} />
          <Main>{children}</Main>
          <Footer>© {new Date().getFullYear()} M Haidar Hanif</Footer>
        </LayoutContainer>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
