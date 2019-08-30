import React from 'react'

import Elevated from '../core/Elevated'
import Button from '../core/Button'

import colors from '../styles/colors.json'

const ElevatedChatButton = props => {
  return (
    <Elevated>
      <Button color="lime">Chat Me</Button>
    </Elevated>
  )
}

export default ElevatedChatButton
