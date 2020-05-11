import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SectionHero from "../components/SectionHero"
import SectionIntro from "../components/SectionIntro"

const IndexPage = () => (
  <Layout>
    <SEO />

    <SectionHero></SectionHero>
    <SectionIntro></SectionIntro>
  </Layout>
)

export default IndexPage
