import React from "react"
import { Link } from "gatsby"

const Nav = ({ links, spacing, theme }) => (
  <span
    style={{
      display: "flex",
      justifyItems: "right",
      justifyContent: "flex-end",
      padding: spacing,
    }}
  >
    {links.map((link, index) => (
      <Link
        to={link.fields.slug}
        key={index}
        style={{
          color: theme.color,
          marginRight: "2em",
        }}
      >
        {link.frontmatter.title}
      </Link>
    ))}
    <a
      style={{
        color: theme.color,
      }}
      href="mailto:hello@ritam.me"
    >
      Support
    </a>
  </span>
)

Nav.defaultProps = {
  theme: "black",
}

export default Nav
