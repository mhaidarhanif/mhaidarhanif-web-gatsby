import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SectionHero from "../components/SectionHero"
import SectionIntro from "../components/SectionIntro"
import SectionSocial from "../components/SectionSocial"

const IndexPage = () => (
  <Layout>
    <SEO />

    <SectionHero></SectionHero>
    <SectionIntro></SectionIntro>
    <SectionSocial></SectionSocial>
  </Layout>
)

export default IndexPage
