import React from 'react'
import styled from '@emotion/styled'

import Elevated from '../core/Elevated'

import colors from '../styles/colors.json'

const ChatButton = styled.button`
  box-shadow: 4px 4px 4px hsla(0, 0%, 0%, 0.25);
  color: ${colors.blue.a};
  background-color: ${colors.blue.c};
  border: none;
  border-radius: 100%;
  border-bottom-right-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  width: 80px;
  height: 80px;
`

const ElevatedChatButton = props => {
  return (
    <Elevated>
      <ChatButton color="lime">Chat</ChatButton>
    </Elevated>
  )
}

export default ElevatedChatButton
