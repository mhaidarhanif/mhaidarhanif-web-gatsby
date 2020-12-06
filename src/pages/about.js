import React from "react"
import { Link } from "gatsby"
import styled from "@xstyled/emotion"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SectionContent from "../components/SectionContent"
import Anchor from "../components/Anchor"
import SpecialtyLinks from "../components/SpecialtyLinks"

import HaidarAvatar from "../components/HaidarAvatar"

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AboutPage = props => (
  <Layout>
    <SEO title="About" />

    <SectionContent title="About Haidar">
      <Avatar>
        <HaidarAvatar />
      </Avatar>

      <div>
        <p>
          Hello! I am Haidar. An educator, engineer, explorer, designer,
          consultant, and mentor. Supporting 100% of remote learning and remote
          work.
        </p>
      </div>

      <div>
        <h2>Works</h2>
        <p>
          I am now focusing to develop an education venture that supports
          distant learning and remote work. It is named{" "}
          <Anchor href="https://catamyst.com">Catamyst</Anchor>, a platform that
          helps people to start and grow their career in the software industry.
          You can learn or showcase your work there. Furthermore, I'm developing
          a highly-skilled professionals community named{" "}
          <Anchor href="https://highskillmasters.com">
            High Skill Masters
          </Anchor>
          .
        </p>
        <p>
          Previously I have founded a coding school named{" "}
          <Anchor href="https://impactbyte.com/about">Impact Byte</Anchor>.
          Before that, I worked with a coding school named{" "}
          <Anchor href="https://hacktiv8.com">Hacktiv8</Anchor>. In the
          beginning of my career, I was a software engineer and trainer in{" "}
          <Anchor href="https://agnium.co.id">Agnium</Anchor> and{" "}
          <Anchor href="https://amp.asia">AMPlified</Anchor>. During and before
          that time, I was also doing some freelance projects of web
          development, software development, and technical training with various
          technologies.
        </p>
      </div>

      <div>
        <h2>Specialties</h2>
        <p>
          Usually I'm most often called a "Full Stack Developer" today. Doing
          everything design, content, frontend, backend, infrastructure, and
          business. My specialties in the last 5 to 10 years are often focused
          on developing, integrating, and teaching modern software technologies.
          Especially full-stack web application development, design, and
          architecture around various open-source toolsets, namely:
          <SpecialtyLinks />
        </p>
      </div>

      <div>
        <p>
          If you have any questions, contact me through the{" "}
          <Link to="/contact">contact</Link> page.
        </p>
      </div>
    </SectionContent>
  </Layout>
)

export default AboutPage
