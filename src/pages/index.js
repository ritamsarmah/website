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
          I am a software engineer from California, and currently working at{" "}
          <a href="https://www.applovin.com">AppLovin</a>. In my spare time, I
          enjoy building useful apps for iOS and macOS. I recently graduated
          from UCLA, where I studied computer science with a focus on{" "}
          <a href="https://hci.ucla.edu">human-computer interaction</a>.
        </p>
        <p>
          Feel free to reach out if you have any questions or just want to say
          hello.
        </p>
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
