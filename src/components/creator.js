import React from "react"
import { Link } from "gatsby"

const Creator = ({ theme }) => (
  <div
    style={{
      marginTop: "4rem",
      marginBottom: "2rem",
      textAlign: "center",
      color: theme.colors.text,
    }}
  >
    Created by{" "}
    <Link style={{ color: theme.colors.accent }} to="/">
      Ritam Sarmah
    </Link>
  </div>
)

export default Creator
