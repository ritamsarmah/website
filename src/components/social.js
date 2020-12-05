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
          link="mailto:hello@ritam.me"
        ></Icon>
        <Icon
          spacing={spacing}
          icon={faGithub}
          link="https://www.github.com/ritamsarmah"
        ></Icon>
        <Icon
          icon={faLinkedin}
          link="https://www.linkedin.com/in/rsarmah/"
        ></Icon>
      </div>
    </div>
  )
}

export default Social
