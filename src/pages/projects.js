import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SectionContent from "../components/SectionContent"

import projects from "../data/projects.json"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />

    <SectionContent title="Projects">
      <p>There are {projects.length} projects:</p>
      <ul>
        {projects
          .filter(project => project.isVisible !== false)
          .map((project, index) => {
            return (
              <li key={index}>
                <a href={project.url}>
                  {project.icon} {project.title}
                </a>
                : {project.description}
              </li>
            )
          })}
      </ul>
    </SectionContent>
  </Layout>
)

export default ProjectsPage
