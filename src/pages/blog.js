import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "@xstyled/emotion"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SectionContent from "../components/SectionContent"

const BlogPostLink = styled(Link)`
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`

const BlogPostSnippet = styled.div`
  border: 2px solid #222222;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 30px;
  h1 {
    color: primary;
    font-size: 32px;
    margin: 10px 0;
  }
  time {
    font-size: 18px;
    color: #555555;
  }
  p {
    margin-bottom: 0;
  }
`

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query BlogPosts {
      blogPosts: allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              subtitle
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />

      <SectionContent title="Blog Posts">
        {data.blogPosts.edges.map((post, index) => {
          const { slug, title, subtitle, date } = post.node.frontmatter

          return (
            <BlogPostSnippet key={index}>
              <BlogPostLink to={slug}>
                <h1>{title}</h1>
              </BlogPostLink>
              <time>{date}</time>
              <p>{subtitle}</p>
              <BlogPostLink to={slug}>
                <small>Read more</small>
              </BlogPostLink>
            </BlogPostSnippet>
          )
        })}
      </SectionContent>
    </Layout>
  )
}

export default BlogPage
