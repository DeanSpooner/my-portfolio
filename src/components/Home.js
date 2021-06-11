import React from "react";
import dean from "../images/dean.png";
import "../styles/Home.css";

const Home = (props) => {
  return (
    <div>
      <h1 className="title">Hi, I'm Dean!</h1>
      <img src={dean} alt="Dean"></img>
      <div className="gradientbox">
        <p>Hi, my name is Dean Spooner!</p>
      </div>
    </div>
  );
};

export default Home;
