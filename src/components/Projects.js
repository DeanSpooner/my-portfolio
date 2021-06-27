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
            <Link to="/nasa-search-engine" className="item">
              NASA Image Search
            </Link>
            <Link to="/weather-app" className="item">
              Weather App
            </Link>
            <Link to="/book-library" className="item">
              Book Library
            </Link>
            <Link to="/music-library" className="item">
              Music Library
            </Link>
            <Link to="/tokyo-metro" className="item">
              Tokyo Metro Sim
            </Link>
            <Link to="/cruise-ship" className="item">
              Cruise Ship Sim
            </Link>
          </div>
          <div className="current-project">
            <Route
              path="/nasa-search-engine"
              render={() => (
                <Project
                  title="NASA Image Search Engine"
                  category="Front End (making use of external Back End APIs)"
                  tech="React, HTML, CSS, JavaScript, Jest, Axios, APIs"
                  description="An image search engine that takes in a search term from a user, and returns images from a NASA API endpoint."
                  github="https://github.com/DeanSpooner/nasa-search-engine"
                  page="https://deanspooner.github.io/nasa-search-engine"
                />
              )}
            />
            <Route
              path="/weather-app"
              render={() => (
                <Project
                  title="Weather Forecast App"
                  category="Front End (making use of external Back End APIs)"
                  tech="React, HTML, CSS, JavaScript, Jest, Axios, APIs"
                  description="A real, working weather app that takes a UK location and returns the forecast for the next five days. Allows the user to see extra details for a particular day."
                  github="https://github.com/DeanSpooner/weather-app"
                  page="https://deanspooner.github.io/weather-app"
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
                  description="My book library. Takes CRUD requests on readers, books, authors and genres. Makes use of foreign keys to apply genres/authors to books, let readers borrow books and so on. Swagger applied as UI for any users to use."
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
                  description="A simulator based on the Tozai line of the Tokyo Metro. An enhancement of my previous Cruise Ship Sim project."
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
