import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SectionContent from "../components/SectionContent"
import Anchor from "../components/Anchor"

const AboutPage = (props: PageProps) => (
  <Layout>
    <SEO title="About" />

    <SectionContent title="About Haidar">
      <p>
        Haidar is an educator, engineer, explorer, designer, innovator, and
        consultant. An avid remote worker and digital nomad.
      </p>
      <p>
        He is now focusing to develop an education venture that supports distant
        learning and remote work named{" "}
        <Anchor href="https://azobu.com">Azobu</Anchor>, which helps people to
        start their career in the software industry. Currently teaching{" "}
        <Anchor href="https://azobu.com/private-training">
          online private mentorship
        </Anchor>{" "}
        there as well. Furthermore, he's developing a highly-skilled
        professionals community named{" "}
        <Anchor href="https://highskillmasters.com">High Skill Masters</Anchor>.
        Previously, he was also founding a coding school named{" "}
        <Anchor href="https://impactbyte.com/about">Impact Byte</Anchor> and
        contributing to a coding school named{" "}
        <Anchor href="https://hacktiv8.com">Hacktiv8</Anchor>. Few years ago, he
        was a software engineer in{" "}
        <Anchor href="https://agnium.co.id">Agnium</Anchor> and{" "}
        <Anchor href="https://amp.asia">AMPlified</Anchor>.
      </p>
      <p>
        His specialties in the last 5 years are often focused on developing,
        integrating, and teaching software technologies. Especially full-stack
        web application development, design, and architecture around various
        open-source toolsets,{" "}
        <Anchor href="https://developer.mozilla.org/JavaScript">
          JavaScript (ES)
        </Anchor>{" "}
        and <Anchor href="https://typescriptlang.org">TypeScript (TS)</Anchor>{" "}
        along with <Anchor href="https://nodejs.org">Node.js</Anchor>,{" "}
        <Anchor href="https://deno.land">Deno</Anchor>,{" "}
        <Anchor href="https://expressjs.com">Express</Anchor>,
        REST/GraphQL/WebSocket API, jQuery/Zepto, React/Vue/Angular, Redux,
        MongoDB, MySQL/MariaDB, PostgreSQL, Redis, Jest/Mocha/Chai, Agile/Lean
        Software Development with Scrum/Kanban, system administration with
        Linux/POSIX tooling, Git source control on GitHub/GitLab/Bitbucket,
        UI/UX design with Figma, also other programming languages such as
        Python, Ruby, Java, Golang, and others.
      </p>
    </SectionContent>
  </Layout>
)

export default AboutPage
