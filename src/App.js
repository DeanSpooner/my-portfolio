import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <div className="navigation-sub">
            <Link to="/" className="item">
              Home
            </Link>
            <Link to="/projects" className="item">
              Projects
            </Link>
            <Link to="/contact" className="item">
              Contact
            </Link>
            <Link to="/about" className="item">
              About
            </Link>
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
};

export default App;
