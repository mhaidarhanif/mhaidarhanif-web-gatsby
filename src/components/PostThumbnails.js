import React from 'react'

import PostThumbnail from './PostThumbnail'

import posts from '../data/posts.json'

const PostThumbnails = () => {
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <PostThumbnail
            key={index}
            image={post.image}
            title={post.title}
            tags={post.tags}
          />
        )
      })}
    </div>
  )
}

export default PostThumbnails
