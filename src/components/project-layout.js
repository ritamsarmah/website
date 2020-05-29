import React from "react"
import PropTypes from "prop-types"

import "./project-layout.css"

const ProjectLayout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `1rem auto`,
          maxWidth: 960,
        }}
      >
        <main style={{ margin: `0 2em` }}>{children}</main>
      </div>
    </>
  )
}

ProjectLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectLayout
