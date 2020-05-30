import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Nav from "../components/nav"
import Creator from "../components/creator"
import ProjectLayout from "../components/project-layout"

const ProjectPage = ({ data }) => {
  const theme = data.projectsYaml.theme
  return (
    <div>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        subdomain={data.projectsYaml.name}
      />
      <style>{`body { background-color: ${theme.colors.bg} } a { color: ${theme.colors.accent}}`}</style>
      <ProjectLayout>
        <Nav links={data.allMarkdownRemark.nodes} theme={theme}></Nav>
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
      name
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
