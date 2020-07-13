import React from "react"
import { PageProps, Link } from "gatsby"
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

const AboutPage = (props: PageProps) => (
  <Layout>
    <SEO title="About" />

    <SectionContent title="About Haidar">
      <Avatar>
        <HaidarAvatar />
      </Avatar>

      <div>
        <p>
          Haidar is an educator, engineer, explorer, designer, consultant, and
          mentor. An avid remote worker and digital nomad, mostly in Asia.
        </p>
      </div>

      <div>
        <h2>Works</h2>
        <p>
          He is now focusing to develop an education venture that supports
          distant learning and remote work named{" "}
          <Anchor href="https://azobu.com">Azobu</Anchor>, which helps people to
          start and grow their career in the software industry. Currently doing{" "}
          <Anchor href="https://azobu.com/mentorship">mentorship</Anchor> there
          as well. Furthermore, he's developing a highly-skilled professionals
          community named{" "}
          <Anchor href="https://highskillmasters.com">
            High Skill Masters
          </Anchor>
          .
        </p>
        <p>
          He was founding a coding school named{" "}
          <Anchor href="https://impactbyte.com/about">Impact Byte</Anchor> and
          worked with a coding school named{" "}
          <Anchor href="https://hacktiv8.com">Hacktiv8</Anchor>. Previously, he
          was a software engineer in{" "}
          <Anchor href="https://agnium.co.id">Agnium</Anchor> and{" "}
          <Anchor href="https://amp.asia">AMPlified</Anchor>. Along the way, he
          was also doing some freelance projects of web development, software
          development, and people training.
        </p>
      </div>

      <div>
        <h2>Specialties</h2>
        <p>
          Most often called a "Full Stack Developer" today. His specialties in
          the last 5 years are often focused on developing, integrating, and
          teaching modern software technologies. Especially full-stack web
          application development, design, and architecture around various
          open-source toolsets, namely:
          <SpecialtyLinks></SpecialtyLinks>
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
