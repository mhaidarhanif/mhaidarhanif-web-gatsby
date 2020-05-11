import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SectionContent from "../components/SectionContent"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />

    <SectionContent title="Blog Posts">
      <p>Posts</p>
    </SectionContent>
  </Layout>
)

export default BlogPage
