import React from "react"

import Nav from "../components/nav"
import Creator from "../components/creator"
import ProjectLayout from "../components/project-layout"

const ProjectPage = ({ data }) => {
  const spacing = "1rem"
  const theme = data.projectsYaml.theme
  return (
    <div>
      <Nav
        links={data.allMarkdownRemark.nodes}
        spacing={spacing}
        theme={theme}
      ></Nav>
      <ProjectLayout margin={spacing}>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
        color
      }
    }
  }
`

export default ProjectPage
