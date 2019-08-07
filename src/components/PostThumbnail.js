import React from 'react'

import Heading from '../core/Heading'

const PostThumbnail = props => {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <Heading>{props.title}</Heading>
    </div>
  )
}

export default PostThumbnail
