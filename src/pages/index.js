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

        {/* TEMPORARY MESSAGE */}
        <div
          style={{
            background: "#6358D85b",
            padding: "12px",
            borderRadius: "5px",
          }}
        >
          <strong>Note to Accelerate Users:</strong> There is a known issue with{" "}
          <strong>macOS Big Sur 11.1 Beta</strong> that breaks video/audio sync
          in Safari, which directly impacts Accelerate's functionality. If your
          computer is currently on macOS 11.1+, you'll need to revert to an
          earlier version in order to use Accelerate. Please&nbsp;
          <a href="https://feedbackassistant.apple.com">
            send your feedback to Apple
          </a>{" "}
          so they may resolve the issue as soon as possible.
        </div>

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
