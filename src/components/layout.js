import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ margin, children }) => {
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  margin: "5rem",
}

export default Layout
