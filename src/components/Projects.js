import React from "react";
import Project from "./Project.js";

const Projects = (props) => {
  return (
    <div>
      <h1 className="title">Dean's Projects</h1>
      <Project
        title="Book Library"
        category="Back End"
        tech="Node.js, MySQL, Sequelize, Heroku, Express"
        description="My book library."
        github="https://github.com/DeanSpooner/book-library"
        page="https://deans-book-library.herokuapp.com/api-docs/"
      />
    </div>
  );
};

export default Projects;
