import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@xstyled/emotion"

const Image = styled(Img)`
  border: 5px solid #222222;
  box-sizing: border-box;
  border-radius: 10px;
  width: 300px;
`

const HaidarPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mhaidarhanif-avatar.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Image fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default HaidarPhoto
