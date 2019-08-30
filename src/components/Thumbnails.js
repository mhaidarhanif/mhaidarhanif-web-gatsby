import React from 'react'
import styled from '@emotion/styled'

import Button from '../core/Button'
import Thumbnail from '../components/Thumbnail'

import posts from '../data/posts.json'

const Thumbnails = () => {
  const StyledThumbnails = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `

  const More = styled.div`
    margin: 10px;
  `

  return (
    <StyledThumbnails>
      {posts.map((post, index) => {
        return <Thumbnail key={index} post={post} />
      })}
      <More>
        <Button shadow color="cyan">
          More Posts
        </Button>
      </More>
    </StyledThumbnails>
  )
}

export default Thumbnails
