import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { breakpoints } from "@xstyled/system"
import styled, { css } from "@xstyled/emotion"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = styled(Img)`
  border: 5px solid #222222;
  box-sizing: border-box;
  border-radius: 10px;

  ${breakpoints({
    xs: css`
      width: 100%;
    `,
    sm: css`
      width: 400px;
    `,
  })}
`

const HaidarPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mhaidarhanif-photo.jpg" }) {
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
