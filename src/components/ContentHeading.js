import React, { Fragment } from 'react'

import Heading from '../core/Heading'
import Paragraph from '../core/Paragraph'

const ContentHeading = ({ title, subtitle }) => {
  return (
    <Fragment>
      <Heading size={1}>{title}</Heading>
      <Paragraph color="gray">{subtitle}</Paragraph>
    </Fragment>
  )
}

export default ContentHeading
