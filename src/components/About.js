import React from "react";
import "../styles/About.css";
import prague from "../images/prague.png";
import kanagawa from "../images/kanagawa.png";
import nara from "../images/nara.png";

const About = (props) => {
  return (
    <div>
      <div className="loader"></div>
      <h1 className="title">About Dean</h1>
      <div className="about-container">
        <div className="about-child">
          <img
            className="fadein prague"
            src={prague}
            alt="Dean in Prague"
          ></img>
          <img src={nara} className="nara" alt="Dean in Nara"></img>
          <img src={kanagawa} className="kanagawa" alt="Dean in Kanagawa"></img>
        </div>
        <div className="about-child">
          <p id="about">
            My name is Dean Spooner and I am a software developer and primary
            school teacher with five years of experience. I have been on the
            Manchester Codes Software Developer boot camp since February 2021,
            learning front-end and back-end web development. <br></br>
            <br></br>I have worked with and studied HTML, CSS, JavaScript,
            Node.js, React, MySQL, APIs, Express, Sequelize and AWS.<br></br>
            <br></br>Outside of the course, I enjoy studying Japanese (my first
            degree!), travelling, cooking, exercise and spending time with my
            friends! <br></br>よろしくお願いします！ (
            <em>Pleased to meet you!</em>)
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
