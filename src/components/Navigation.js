import React from 'react'
import styled from '@emotion/styled'

import Nav from '../core/Nav'

import ButtonLanguage from './ButtonLanguage'
import ButtonSearch from './ButtonSearch'
import ButtonTheme from './ButtonTheme'
import ButtonMenu from './ButtonMenu'

import colors from '../styles/colors.json'

const Logo = styled.a`
  color: ${colors.white.c};
  text-decoration: none;
  line-height: 30px;
  display: flex;
  align-items: center;
`

const LogoImage = styled.img`
  margin-right: 10px;
`

const LogoHeading = styled.h1`
  font-family: 'Overlock', sans-serif;
  font-size: 2em;
`

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;

  & li {
    margin: 0 15px;
  }
`

const ListItem = styled.li``

const Link = styled.a`
  font-size: 1.5em;
`

const ButtonList = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  align-items: center;
`

const ButtonItem = styled.li`
  margin: 0 10px;
`

const Navigation = () => {
  return (
    <Nav>
      <Logo href="/">
        <LogoImage src="/icons/lion.png" alt="Lion" />
        <LogoHeading>M Haidar Hanif</LogoHeading>
      </Logo>
      <NavigationList>
        <ListItem>
          <Link>About</Link>
        </ListItem>
        <ListItem>
          <Link>Projects</Link>
        </ListItem>
        <ListItem>
          <Link>Postings</Link>
        </ListItem>
        <ListItem>
          <Link>Contact</Link>
        </ListItem>
      </NavigationList>
      <ButtonList>
        <ButtonItem>
          <ButtonLanguage />
        </ButtonItem>
        <ButtonItem>
          <ButtonSearch />
        </ButtonItem>
        <ButtonItem>
          <ButtonTheme />
        </ButtonItem>
        <ButtonItem>
          <ButtonMenu />
        </ButtonItem>
      </ButtonList>
    </Nav>
  )
}

export default Navigation
