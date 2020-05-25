import React from "react"
import PropTypes from "prop-types"

import "./project-layout.css"

const ProjectLayout = ({ margin, children }) => {
  return (
    <>
      <div
        style={{
          margin: `${margin} auto`,
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

ProjectLayout.defaultProps = {
  margin: "5rem",
}

export default ProjectLayout
