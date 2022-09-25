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
            <ul>
              <li className="unbullet-list">
                <Link to="/my-portfolio/projects/pokedex" className="item">
                  Pokédex
                </Link>
              </li>
              <li className="unbullet-list">
                <Link to="/my-portfolio/projects/cool-dinners" className="item">
                  Cool Dinners Paired Project
                </Link>
              </li>
              <li className="unbullet-list">
                <Link
                  to="/my-portfolio/projects/surreal-estate"
                  className="item"
                >
                  Surreal Estate App
                </Link>
              </li>
              <li className="unbullet-list">
                <Link
                  to="/my-portfolio/projects/nasa-search-engine"
                  className="item"
                >
                  NASA Image Search
                </Link>
              </li>
              <li className="unbullet-list">
                <Link to="/my-portfolio/projects/weather-app" className="item">
                  Weather App
                </Link>
              </li>
              <li className="unbullet-list">
                <Link to="/my-portfolio/projects/book-library" className="item">
                  Book Library
                </Link>
              </li>
              <li className="unbullet-list">
                <Link
                  to="/my-portfolio/projects/music-library"
                  className="item"
                >
                  Music Library
                </Link>
              </li>
              <li className="unbullet-list">
                <Link to="/my-portfolio/projects/tokyo-metro" className="item">
                  Tokyo Metro Sim
                </Link>
              </li>
              <li className="unbullet-list">
                <Link to="/my-portfolio/projects/cruise-ship" className="item">
                  Cruise Ship Sim
                </Link>
              </li>
            </ul>
          </div>
          <div className="current-project">
            <Route
              path="/my-portfolio/projects/pokedex"
              render={() => (
                <Project
                  title="Pokédex"
                  category="Frontend (making use of external Backend APIs)"
                  tech="Next.js, React, HTML, CSS, TypeScript, JavaScript, NPM, Axios, Jest, React Testing Library, APIs"
                  description="A Pokémon information portal, demonstrating examples of static-site generated (SSG) and server-side rendered (SSR) pages. Built in TypeScript using Next.js and React, as part of my successful review for promotion to Mid-Level Frontend Developer, built in my free time over the space of a week."
                  github="https://github.com/DeanSpooner/pokedex"
                  page={null}
                />
              )}
            />
            <Route
              path="/my-portfolio/projects/cool-dinners"
              render={() => (
                <Project
                  title="Cool Dinners - Final Bootcamp Project"
                  category="Full Stack"
                  tech="React, HTML, CSS, JavaScript, Node.js, Moment,js, Axios, MySQL, Docker, Express, Heroku, Jest, APIs"
                  description="A React web app that allows school staff to create and edit food orders for their students. Created as a final paired project with my friend Matt Holmes."
                  github="https://github.com/MattHolmes2909/Cool-Dinners-Frontend"
                  page={null}
                  demo="https://www.youtube.com/watch?v=cEsCZTyqzLY"
                />
              )}
            />
            <Route
              path="/my-portfolio/projects/surreal-estate"
              render={() => (
                <Project
                  title="Surreal Estate Properties App"
                  category="Frontend (making use of external Backend APIs)"
                  tech="React, HTML, CSS, JavaScript, Jest, Axios, APIs"
                  description="A React web app that allows users to browse and search through different properties linked to an external API."
                  github="https://github.com/DeanSpooner/surreal-estate"
                  page={null}
                />
              )}
            />
            <Route
              path="/my-portfolio/projects/nasa-search-engine"
              render={() => (
                <Project
                  title="NASA Image Search Engine"
                  category="Frontend (making use of external Backend APIs)"
                  tech="React, HTML, CSS, JavaScript, Jest, Axios, APIs"
                  description="An image search engine that takes in a search term from a user, and returns images from a NASA API endpoint."
                  github="https://github.com/DeanSpooner/nasa-search-engine"
                  page="https://deanspooner.github.io/nasa-search-engine"
                />
              )}
            />
            <Route
              path="/my-portfolio/projects/weather-app"
              render={() => (
                <Project
                  title="Weather Forecast App"
                  category="Frontend (making use of external Backend APIs)"
                  tech="React, HTML, CSS, JavaScript, Jest, Axios, APIs"
                  description="A real, working weather app that takes a UK location and returns the forecast for the next five days. Allows the user to see extra details for a particular day."
                  github="https://github.com/DeanSpooner/weather-app"
                  page="https://deanspooner.github.io/weather-app"
                />
              )}
            />
            <Route
              path="/my-portfolio/projects/book-library"
              render={() => (
                <Project
                  title="Book Library"
                  category="Backend"
                  tech="Node.js, MySQL, APIs, Sequelize, Express, Mocha, Chai, Heroku, Swagger"
                  description="My book library. Takes CRUD requests on readers, books, authors and genres. Makes use of foreign keys to apply genres/authors to books, let readers borrow books and so on. Swagger applied as UI for any users to use."
                  github="https://github.com/DeanSpooner/book-library"
                  page="https://deans-book-library.herokuapp.com/api-docs/"
                />
              )}
            />
            <Route
              path="/my-portfolio/projects/music-library"
              render={() => (
                <Project
                  id="music"
                  title="Music Library"
                  category="Backend"
                  tech="Node.js, MySQL, Express, Mocha, Chai, Heroku"
                  description="My music library. Requires a third-party application such as Postman to make CRUD requests."
                  github="https://github.com/DeanSpooner/music-library"
                  page="https://music-library-cli.herokuapp.com/"
                />
              )}
            />
            <Route
              path="/my-portfolio/projects/tokyo-metro"
              render={() => (
                <Project
                  title="Tokyo Metro Tozai Simulator"
                  category="Frontend"
                  tech="HTML, CSS, JavaScript, Jest"
                  description="A simulator based on the Tozai line of the Tokyo Metro. An enhancement of my previous Cruise Ship Sim project."
                  github="https://github.com/DeanSpooner/tozai"
                  page="https://deanspooner.github.io/tozai/"
                />
              )}
            />
            <Route
              id="cruise"
              path="/my-portfolio/projects/cruise-ship"
              render={() => (
                <Project
                  title="Cruise Ship Simulator"
                  category="Frontend"
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
