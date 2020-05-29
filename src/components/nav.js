import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = ({ links, theme }) => {
  const NavBar = styled.span`
    display: flex;
    justify-items: right;
    justify-content: flex-end;
    margin: 2rem auto 4rem;

    a {
      color: ${theme.colors.text};
      font-weight: bold;
      margin-left: 1em;
      margin-right: 1em;
      transition: 0.3s;
    }

    a:hover {
      color: ${theme.colors.accent};
      text-decoration: none;
    }

    @media screen and (max-width: 1024px) {
      justify-content: center;
    }
  `

  return (
    <NavBar>
      {links.map((link, index) => (
        <Link to={link.fields.slug} key={index}>
          {link.frontmatter.title}
        </Link>
      ))}
      <a href="mailto:hello@ritam.me">Support</a>
    </NavBar>
  )
}

export default Nav
