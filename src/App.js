import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Tech from "./components/Tech";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <div className="navigation-sub">
            <Link to="/my-portfolio" className="item">
              Home
            </Link>
            <Link to="/my-portfolio/projects" className="item">
              Projects
            </Link>
            <Link to="/my-portfolio/tech" className="item">
              Technology
            </Link>
            <Link to="/my-portfolio/about" className="item">
              About
            </Link>
            <Link to="/my-portfolio/contact" className="item">
              Contact
            </Link>
          </div>
        </div>
        <Route exact path="/my-portfolio" component={Home} />
        <Route path="/my-portfolio/projects" component={Projects} />
        <Route path="/my-portfolio/tech" component={Tech} />
        <Route path="/my-portfolio/about" component={About} />
        <Route path="/my-portfolio/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
};

export default App;
