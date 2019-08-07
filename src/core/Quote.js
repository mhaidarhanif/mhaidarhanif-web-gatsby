import React from 'react'

const Quote = props => {
  return (
    <blockquote>
      <span>“{props.text}”</span>
      {props.author && <span>— {props.author}</span>}
    </blockquote>
  )
}

export default Quote
