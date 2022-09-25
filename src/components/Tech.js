import React from "react";

const Tech = () => {
  return (
    <div>
      <div className="loader"></div>
      <h1 className="title">Tech Stack</h1>
      <div className="about-container">
        <div className="about-child"></div>
        <div className="about-child">
          <p id="about">
            My main tech stack, that I work with on a daily basis, include:
            <ul>
              <li>HTML;</li>
              <li>CSS, SCSS/Sass, Styled Components;</li>
              <li>JavaScript;</li>
              <li>TypeScript;</li>
              <li>React;</li>
              <li>Next.js;</li>
              <li>Node.js/NPM;</li>
              <li>Jest;</li>
              <li>React Testing Library;</li>
              <li>Percy visual testing;</li>
              <li>Bitbucket, GitHub, Azure repos.</li>
            </ul>
          </p>
          <p id="about">
            I also have experience with:
            <ul>
              <li>Angular;</li>
              <li>Vue;</li>
              <li>Razor C#/.CSHTML markup;</li>
              <li>MySQL, Express, Sequelize;</li>
              <li>OutSystems;</li>
              <li>Go;</li>
              <li>Python.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tech;
