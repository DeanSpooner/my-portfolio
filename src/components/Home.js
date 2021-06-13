import React from "react";
import dean from "../images/dean.png";
import "../styles/Home.css";

const Home = (props) => {
  return (
    <div>
      <div className="loader"></div>
      <h1 className="title">Hi, I'm Dean!</h1>
      <div className="flexbox fadein">
        <div className="flexbox-items">
          <img src={dean} alt="Dean"></img>
        </div>
        <div className="flexbox-items">
          <p id="introduction">
            ...and I am a software developer! I hope you enjoy having a look
            through my projects and finding out a little more about who I am.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
