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
          I am a software engineer at{" "}
          <a href="https://www.applovin.com">AppLovin</a> and based in San
          Francisco, CA. I enjoy building awesome apps for iOS and macOS, with a
          focus on beautiful, quality user experiences. I graduated from UCLA,
          where I studied computer science and researched{" "}
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
