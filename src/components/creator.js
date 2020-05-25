import React from "react"
import { Link } from "gatsby"

const Creator = ({ theme }) => (
  <div
    style={{
      marginTop: "4rem",
      marginBottom: "2rem",
      textAlign: "center",
    }}
  >
    Created by{" "}
    <Link style={{ color: theme.color }} to="/">
      Ritam Sarmah
    </Link>
  </div>
)

export default Creator
