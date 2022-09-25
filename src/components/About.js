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
        <div className="about-child-images">
          <img
            className="fadein prague"
            src={prague}
            alt="Dean in Prague"
          ></img>
          <img src={nara} className="nara" alt="Dean in Nara"></img>
          <img src={kanagawa} className="kanagawa" alt="Dean in Kanagawa"></img>
        </div>
        <div className="about-child-paras">
          <p id="about">
            My name is Dean Spooner and I am a frontend developer and former
            primary school teacher of five years. I am an alumni of the
            Manchester Codes Software Developer boot camp, studying and taking
            part from February to September 2021, learning full stack web
            development.
            <br></br>
            <br></br>I am currently a Mid-Level Frontend Developer for a large
            global digital agency, working from their Manchester branch. I have
            worked with large clients to deliver and maintain new large web
            platforms, creating new features, bugfixes and solutions. I
            collaborate with other developers, both frontend and backend, as
            well as project managers, designers, QAs and clients, to deliver the
            best, most-accessible and performative web experiences.
            <br></br>
            <br></br>Outside of work, I enjoy studying Japanese (my first
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
