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
        Haidar is an educator, engineer, explorer, designer, innovator, and
        consultant. An avid remote worker and digital nomad.
      </p>
      <p>
        He's building an education venture that supports distant learning and
        remote work named Azobu (<a href="https://azobu.com">azobu.com</a>).
        Currently teaching online private mentorship as well. Furthermore, he's
        developing a highly-skilled professionals community named High Skill
        Masters (<a href="https://highskillmasters.com">highskillmasters.com</a>
        ). Previously, he was also founding a coding school named Impact Byte (
        <a href="https://impactbyte.com/about">impactbyte.com</a>) and
        contributing to a coding school named Hacktiv8 (
        <a href="https://hackti8.com">hacktiv8.com</a>).
      </p>
      <p>
        His specialties in the last 5 years are often focused on developing,
        integrating, and teaching software technologies. Especially full-stack
        web application development, design, and architecture around various
        open-source toolsets, JavaScript (ES) and TypeScript (TS) along with
        Node.js, Express.js, REST/GraphQL/WebSocket API, jQuery/Zepto,
        React/Vue/Angular, Redux, MongoDB, MySQL/MariaDB, PostgreSQL, Redis,
        Jest/Mocha/Chai, Agile/Lean Software Development with Scrum/Kanban,
        system administration with Linux/POSIX tooling, Git source control on
        GitHub/GitLab/Bitbucket, UI/UX design with Figma, also other programming
        languages such as Python, Ruby, Java, Golang, and others.
      </p>
    </SectionContent>
  </Layout>
)

export default AboutPage
