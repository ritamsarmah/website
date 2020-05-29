import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Creator = ({ theme }) => {
  const CreatorText = styled.div`
    margin-top: 4rem;
    margin-bottom: 2rem;
    text-align: center;
    color ${theme.colors.text}
  `
  return (
    <CreatorText>
      Created by{" "}
      <Link style={{ color: theme.colors.accent }} to="/">
        Ritam Sarmah
      </Link>
    </CreatorText>
  )
}

export default Creator
