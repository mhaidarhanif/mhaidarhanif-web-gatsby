import React from "react"
import styled from "@xstyled/emotion"

import topics from "../data/topics.json"

const TopicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 600px;
`

const Topic = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  width: 300px;
`

const Image = styled.img``

const Name = styled.span`
  margin-left: 30px;
  font-size: 1.2em;
`

const Topics = () => (
  <TopicsContainer>
    {topics.map((topic, index) => {
      const slug = topic.toLowerCase().split(" ").join("-")
      return (
        <Topic key={index}>
          <Image src={`/topics/${slug}.svg`} alt={topic} />
          <Name>{topic}</Name>
        </Topic>
      )
    })}
  </TopicsContainer>
)

export default Topics
