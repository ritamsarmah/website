import React from "react"
import { graphql } from "gatsby"

import Nav from "../components/nav"
import Creator from "../components/creator"
import ProjectLayout from "../components/project-layout"

const ProjectPage = ({ data }) => {
  const theme = data.projectsYaml.theme
  return (
    <div>
      <style>{`body { background-color: ${theme.colors.bg}; } a { color: ${theme.colors.accent}}`}</style>
      <ProjectLayout margin="1rem" theme={theme}>
        <Nav
          links={data.allMarkdownRemark.nodes}
          spacing="2rem"
          theme={theme}
        ></Nav>
        <div
          style={{ color: theme.colors.text }}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <Creator theme={theme}></Creator>
      </ProjectLayout>
    </div>
  )
}

export const query = graphql`
  query($project: String!, $slug: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { project: { eq: $project } } }
      sort: { fields: frontmatter___index, order: ASC }
    ) {
      nodes {
        id
        frontmatter {
          title
          project
          index
        }
        fields {
          slug
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    projectsYaml(name: { eq: $project }) {
      theme {
        colors {
          accent
          bg
          text
        }
      }
    }
  }
`

export default ProjectPage
