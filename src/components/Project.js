import React from "react";
import "../styles/Project.css";

const Project = ({ title, category, tech, description, github, page }) => {
  return (
    <div className="project">
      <div className="fadeinfast">
        <h2>{title}</h2>
        <p>{category}</p>
        <p>Tech stack used: {tech}</p>
        <p>{description}</p>
        <a target="_blank" href={github} rel="noreferrer">
          Github
        </a>
        <a target="_blank" href={page} rel="noreferrer">
          Live page
        </a>
      </div>
    </div>
  );
};

export default Project;
