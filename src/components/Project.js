import React from "react";
import "../styles/Project.css";

const Project = ({ title, category, tech, description, github, page }) => {
  return (
    <div className="project fadein">
      <h2>{title}</h2>
      <h3>{category}</h3>
      <h3>Tech stack used: {tech}</h3>
      <p>{description}</p>
      <a target="_blank" href={github} rel="noreferrer">
        Github
      </a>
      <a target="_blank" href={page} rel="noreferrer">
        Live page
      </a>
    </div>
  );
};

export default Project;
