import React from "react";
import { Link } from "react-router-dom";

const Intro = () => (
  <div className="main-page">
    <div className="intro">
      <div className="intro__content">
        <img src={require("./img/profile.jpg")} alt="profile" />
        <div>
          Hi! I'm Mariann. <br />I am a software developer.
          <br />
          <Link to="/projects" className="intro__link">
            Have a look at my work!
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
