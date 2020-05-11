import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SectionContent from "../components/SectionContent"

const AboutPage = (props: PageProps) => (
  <Layout>
    <SEO title="About" />

    <SectionContent title="About Haidar">
      <p>
        Haidar is a seasoned tech educator and engineer who mentor people in
        software engineering, web development, and industrial career. Beyond
        that, he’s exploring various experiments to solve world problems.
        Especially helping people’s career in the software industry. Normally he
        doesn’t talk in a 3rd person view.
      </p>
    </SectionContent>
  </Layout>
)

export default AboutPage
