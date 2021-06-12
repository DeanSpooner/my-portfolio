import React from "react";
import Project from "./Project.js";

const projectStates = [
  {
    title: "Book Library",
    category: "Back End",
    tech: "Node.js, MySQL, Sequelize, Express, Heroku, Swagger",
    description: "My book library.",
    github: "https://github.com/DeanSpooner/book-library",
    page: "https://deans-book-library.herokuapp.com/api-docs/",
  },
  {
    title: "Music Library",
    category: "Back End",
    tech: "Node.js, MySQL, Express, Heroku",
    description: "My music library.",
    github: "https://github.com/DeanSpooner/music-library",
    page: "https://music-library-cli.herokuapp.com/",
  },
];

let currentProject = 0;

const Projects = (props) => {
  return (
    <div>
      <div className="loader"></div>
      <h1 className="title">Dean's Projects</h1>
      <div className="current-project">
        <Project
          title={projectStates[currentProject].title}
          category={projectStates[currentProject].category}
          tech={projectStates[currentProject].tech}
          description={projectStates[currentProject].description}
          github={projectStates[currentProject].github}
          page={projectStates[currentProject].pages}
        />
      </div>
    </div>
  );
};

export default Projects;
