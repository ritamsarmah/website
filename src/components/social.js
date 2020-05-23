import React from "react"
import Icon from "./icon.js"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Social = () => {
  const spacing = "2rem"
  return (
    <div
      style={{
        marginTop: spacing,
      }}
    >
      <div>
        <Icon
          spacing={spacing}
          icon={faEnvelope}
          href="mailto:hello@ritam.me"
        ></Icon>
        <Icon
          spacing={spacing}
          icon={faGithub}
          href="https://www.github.com/ritamsarmah"
        ></Icon>
        <Icon
          icon={faLinkedin}
          href="https://www.linkedin.com/in/rsarmah/"
        ></Icon>
      </div>
    </div>
  )
}

export default Social
