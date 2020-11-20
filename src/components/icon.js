import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import iconStyles from "./icon.module.css"

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css"
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false /* eslint-disable import/first */

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
