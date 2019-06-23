import React from "react";
import { Link } from "react-router-dom";

const Intro = () => (
  <div className="main-page">
    <div className="intro">
      <h3 className="intro__title">
        "A​rt enables us to find ourselves and lose ourselves at the same time​"
        <br />- Thomas Merton
      </h3>
      <div className="intro__content">
        Hi! I'm Mariann. <br />I am a software developer.
        <br />
        <Link to="/projects" className="intro__link">
          Have a look at my work!
        </Link>
      </div>
    </div>
  </div>
);

export default Intro;
