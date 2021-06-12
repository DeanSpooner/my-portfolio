import React from "react";
import Project from "./Project.js";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Projects = (props) => {
  return (
    <div>
      <div className="loader"></div>
      <h1 className="title">Dean's Projects</h1>
      <BrowserRouter>
        <div className="App">
          <div className="navigation">
            <div className="navigation-sub">
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
            </div>
          </div>
          <Route
            path="/weather-app"
            render={() => (
              <Project
                title="Weather Forecast App - currently being built. 🚧"
                category="Front End"
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
                description="A simulator based on the Tozai line of the Tokyo Metro."
                github="https://github.com/DeanSpooner/tozai"
                page="https://deanspooner.github.io/tozai/"
              />
            )}
          />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Projects;
