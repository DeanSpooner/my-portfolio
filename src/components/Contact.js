import React from "react";
import "../styles/Contact.css";
import github from "../images/github.png";
import email from "../images/email.png";
import linkedin from "../images/linkedin.png";

const Contact = (props) => {
  return (
    <div>
      <div className="loader"></div>
      <h1 className="title">Contact Dean</h1>
      <div className="contact-container">
        <div className="contact-child emailbox">
          <a
            href="mailto:dean.spooner@live.co.uk"
            target="_blank"
            rel="noreferrer"
          >
            <img src={email} alt="Email" class="email"></img>
            <p>dean.spooner@live.co.uk</p>
          </a>
        </div>
        <div className="contact-child githubbox">
          <a
            href="https://github.com/DeanSpooner"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="GitHub" class="github"></img>
            <p>github.com/DeanSpooner</p>
          </a>
        </div>
        <div className="contact-child linkedinbox">
          <a
            href="https://www.linkedin.com/in/deanspooner"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" class="linkedin"></img>
            <p>linkedin.com/in/deanspooner</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
