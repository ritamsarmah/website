import React from "react"

import projectStyles from "./project.module.css"

const Project = ({ project }) => (
  <div className={projectStyles.container}>
    <h3 className={projectStyles.projectHeader}>{project.name}</h3>
    <p className={projectStyles.projectDescription}>{project.description}</p>
    {project.links.map((link, index) => (
      <span key={index} className={projectStyles.projectLink}>
        <a href={link.url}>{link.name}</a>
      </span>
    ))}
  </div>
)

export default Project
