import React from "react";
import "../styles/About.css";
import prague from "../images/prague.png";
import kanagawa from "../images/kanagawa.png";
import nara from "../images/nara.png";

const About = props => {
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
            My name is Dean Spooner and I am a software developer and former
            primary school teacher of five years. I am an alumni of the
            Manchester Codes Software Developer boot camp, studying and taking
            part from February to September 2021, learning full stack web
            development.
            <br></br>
            <br></br>I am currently a junior software developer for a fintech
            company in Manchester, learning and working with both front-end and
            back-end aspects of code to develop web and app solutions. I work in
            an Agile environment, collaborating with other developers, QAs,
            product owners, business analysts and other stakeholders.
            <br></br>
            <br></br>I have worked with and studied HTML, CSS, JavaScript,
            Node.js, React, MySQL, APIs, Express, Sequelize and AWS. In my
            current role, I am learning OutSystems, Go and Python, as well as
            keeping up my JavaScript skills from the boot camp.<br></br>
            <br></br>Outside of the course, I enjoy studying Japanese (my first
            degree!), travelling, cooking, exercise and spending time with my
            friends! I also am enjoying learning a little bit of 3D modelling
            and rendering using Blender and three.js! <br></br>
            よろしくお願いします！ (<em>Pleased to meet you!</em>)
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
