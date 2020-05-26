import React from "react"
import { Link } from "gatsby"

const Nav = ({ links, spacing, theme }) => (
  <span
    style={{
      display: "flex",
      justifyItems: "right",
      justifyContent: "flex-end",
      margin: `${spacing} auto 4rem`,
    }}
  >
    {links.map((link, index) => (
      <Link
        to={link.fields.slug}
        key={index}
        style={{
          color: theme.colors.accent,
          marginRight: "2em",
        }}
      >
        {link.frontmatter.title}
      </Link>
    ))}
    <a
      style={{
        color: theme.colors.accent,
      }}
      href="mailto:hello@ritam.me"
    >
      Support
    </a>
  </span>
)

export default Nav
