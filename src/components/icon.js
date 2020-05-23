import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import iconStyles from "./icon.module.css"

const Icon = ({ spacing, href, icon }) => (
  <a
    className={iconStyles.icon}
    href={href}
    style={{
      marginRight: spacing,
    }}
  >
    <FontAwesomeIcon icon={icon} size="2x"></FontAwesomeIcon>
  </a>
)

Icon.defaultProps = {
  spacing: "0px",
}

export default Icon
