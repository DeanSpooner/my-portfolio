import React from "react";
import Project from "./Project.js";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../styles/Projects.css";

const Projects = (props) => {
  return (
    <div>
      <div className="loader"></div>
      <h1 className="title">Dean's Projects</h1>
      <BrowserRouter>
        <div className="projects-container fadein">
          <div className="sidenav-sub">
            <Link to="/weather-app" className="item">
              Weather App
            </Link>
            <br></br>
            <Link to="/book-library" className="item">
              Book Library
            </Link>
            <br></br>
            <Link to="/music-library" className="item">
              Music Library
            </Link>
            <br></br>
            <Link to="/tokyo-metro" className="item">
              Tokyo Metro Sim
            </Link>
            <br></br>
            <Link to="/cruise-ship" className="item">
              Cruise Ship Sim
            </Link>
          </div>
          <div className="current-project">
            <Route
              path="/weather-app"
              render={() => (
                <Project
                  title="Weather Forecast App - currently being built. 🚧"
                  category="Front End (making use of Back End APIs)"
                  tech="React, HTML, CSS, JavaScript, Jest, APIs"
                  description="A weather app that takes a location and returns the forecast for the next five days. Currently being built."
                  github="https://github.com/DeanSpooner/weather-app"
                  page="https://github.com/DeanSpooner/weather-app"
                />
              )}
            />
            <Route
              path="/book-library"
              render={() => (
                <Project
                  title="Book Library"
                  category="Back End"
                  tech="Node.js, MySQL, APIs, Sequelize, Express, Mocha, Chai, Heroku, Swagger"
                  description="My book library."
                  github="https://github.com/DeanSpooner/book-library"
                  page="https://deans-book-library.herokuapp.com/api-docs/"
                />
              )}
            />
            <Route
              path="/music-library"
              render={() => (
                <Project
                  id="music"
                  title="Music Library"
                  category="Back End"
                  tech="Node.js, MySQL, Express, Mocha, Chai, Heroku"
                  description="My music library. Requires a third-party application such as Postman to make CRUD requests."
                  github="https://github.com/DeanSpooner/music-library"
                  page="https://music-library-cli.herokuapp.com/"
                />
              )}
            />
            <Route
              path="/tokyo-metro"
              render={() => (
                <Project
                  title="Tokyo Metro Tozai Simulator"
                  category="Front End"
                  tech="HTML, CSS, JavaScript, Jest"
                  description="A simulator based on the Tozai line of the Tokyo Metro. An enhancement of my previous Cruise Ships project."
                  github="https://github.com/DeanSpooner/tozai"
                  page="https://deanspooner.github.io/tozai/"
                />
              )}
            />
            <Route
              id="cruise"
              path="/cruise-ship"
              render={() => (
                <Project
                  title="Cruise Ship Simulator"
                  category="Front End"
                  tech="HTML, CSS, JavaScript, Jest"
                  description="A cruise ship simulator that makes use of classes and constructor functions. Includes a GUI."
                  github="https://github.com/DeanSpooner/cruise-ships"
                  page="https://deanspooner.github.io/cruise-ships/"
                />
              )}
            />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Projects;
