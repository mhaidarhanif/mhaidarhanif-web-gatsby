import React from 'react'
import styled from '@emotion/styled'

import colors from '../styles/colors.json'

const Thumbnail = ({ image, title, tags }) => {
  const ThumbnailLink = styled.a``

  const StyledThumbnail = styled.div`
    box-shadow: 4px 4px 4px hsla(0, 0%, 0%, 0.25);
    align-items: flex-end;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    display: flex;
    height: 300px;
    padding: 20px;
    width: 600px;
    margin: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  `

  const ThumbnailContent = styled.div`
    padding: 15px 10px;
  `

  const ThumbnailTitle = styled.h3`
    color: ${colors.white.c};
    font-size: 2em;
    line-height: 1.6em;
    padding: 10px 0;
  `

  const ThumbnailTags = styled.div`
    margin-top: 10px;
  `

  const ThumbnailTag = styled.span`
    background: ${colors.black.c};
    border-radius: 10px;
    color: ${colors.white.a};
    font-size: 1.2em;
    font-weight: bold;
    letter-spacing: 1.2px;
    margin-right: 20px;
    padding: 5px 15px;
    text-transform: uppercase;
  `

  return (
    <ThumbnailLink href="https://google.com">
      <StyledThumbnail>
        <ThumbnailContent>
          <ThumbnailTitle>{title}</ThumbnailTitle>
          <ThumbnailTags>
            {tags.map((tag, index) => {
              return (
                <ThumbnailTag key={index} href="">
                  {tag}
                </ThumbnailTag>
              )
            })}
          </ThumbnailTags>
        </ThumbnailContent>
      </StyledThumbnail>
    </ThumbnailLink>
  )
}

export default Thumbnail
