import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { breakpoints } from "@xstyled/system"
import styled, { css } from "@xstyled/emotion"

import pages from "../data/pages.json"

const Containers = styled.nav`
  display: block;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 100;
  padding: 0;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(200%) blur(5px);
`

const Column = styled.div`
  display: flex;
  align-items: center;
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`

const LogoIcon = styled.img`
  width: 30px;
`

const LogoText = styled.span`
  color: primary;
  font-size: 1.2em;
  font-weight: 500;
  letter-spacing: 0.1em;
  padding-left: 10px;
`

const NavigationLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  text-transform: uppercase;
  margin: 0;
  li {
    margin: 0 10px;
    a {
      color: white;
      opacity: 0.5;
      transition: opacity 0.2s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
  }
  ${breakpoints({
    xs: css`
      justify-content: space-between;
      display: none;
    `,
    md: css`
      display: flex;
    `,
  })}
`

const MenuIcon = styled.img`
  cursor: pointer;
  width: 30px;
  padding: 10px;
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`

const Header = ({ siteTitle }) => (
  <Containers>
    <Row>
      <Column>
        <LogoLink to="/">
          <LogoIcon src="/mhaidarhanif-icon.svg" alt="Logo Icon" />
          <LogoText to="/">{siteTitle}</LogoText>
        </LogoLink>
      </Column>

      <Column>
        <NavigationLinks>
          {pages
            .filter(page => page.isNavigation)
            .map((page, index) => {
              return (
                <li key={index}>
                  <Link to={page.path}>{page.name}</Link>
                </li>
              )
            })}
        </NavigationLinks>
        <MenuIcon src="/menu-icon.svg" alt="Menu Icon" />
      </Column>
    </Row>
  </Containers>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
