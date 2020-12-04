import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import Project from "../components/project"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello! I&#39;m Ritam.</h1>
      <div>
        <p>
          I am a software developer and graduate student at UCLA pursuing an
          M.S. in Computer Science. I've previously worked on teams at AppLovin
          and AT&T. Recently, I've been researching multimodal interfaces and
          natural language processing with{" "}
          <a href="https://hci.ucla.edu">UCLA HCI Research</a>. I love building
          awesome apps for iOS and macOS, with a focus on beautiful, quality
          user experiences.
        </p>
        <p>Feel free to contact me if you have any questions or comments.</p>

        <Social />
        <div style={{ maxWidth: `300px`, marginBottom: `5rem` }}></div>
        <h1>Projects</h1>
        {data.allProjectsYaml.nodes.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allProjectsYaml {
      nodes {
        description
        name
        tags
        links {
          name
          url
        }
      }
    }
  }
`

export default IndexPage
