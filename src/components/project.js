import React from "react"

const Project = ({ project }) => (
  <div>
    <h3
      style={{
        fontFamily: "Nunito Sans",
        margin: "0.5rem auto",
      }}
    >
      {project.name}
    </h3>
    <p>{project.description}</p>
    {project.links.map(link => (
      <a href={link.url}>{link.name}</a>
    ))}
  </div>
)

export default Project
