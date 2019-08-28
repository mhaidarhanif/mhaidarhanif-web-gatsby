import React from 'react'

import Elevated from '../core/Elevated'
import Button from '../core/Button'

import colors from '../styles/colors.json'

const ElevatedChatButton = props => {
  return (
    <Elevated>
      <Button color={colors.green.a} backgroundColor={colors.lime.c}>
        Chat Me
      </Button>
    </Elevated>
  )
}

export default ElevatedChatButton
