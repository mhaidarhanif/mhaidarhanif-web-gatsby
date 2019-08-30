import React from 'react'
import styled from '@emotion/styled'

import colors from '../styles/colors.json'

const StyledButtonLanguage = styled.button`
  color: ${colors.white.c};
  background: none;
  border-radius: 5px;
  border: 2px solid ${colors.white.c};
  font-size: 1.4em;
  font-weight: bold;
  padding: 5px 10px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`

const Icon = styled.img`
  margin-right: 5px;
`

const Language = styled.span``

let settings = {
  icon: 'en.svg',
  language: 'English',
  languageSymbol: 'EN'
}

const ButtonLanguage = () => {
  return (
    <StyledButtonLanguage>
      <Icon src={`/icons/${settings.icon}`} alt={settings.langauge}></Icon>
      <Language>{settings.languageSymbol}</Language>
    </StyledButtonLanguage>
  )
}

export default ButtonLanguage
