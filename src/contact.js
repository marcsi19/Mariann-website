import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__box">
        <Link to="https://github.com/marcsi19" target="_blank">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github"
          />
        </Link>
        <Link to="https://www.linkedin.com/in/mariannmateka/" target="_blank">
          <img
            src=" http://www.systemcare-ict.nl/wp-content/uploads/2015/01/linkedin-logo.png"
            alt="linkedin"
          />
        </Link>
        <Link to="https://bit.ly/2ZsoiWH" target="_blank">
          <img
            src="https://freepngimg.com/download/resume/3-2-resume-png.png"
            alt="resume"
          />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
