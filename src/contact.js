import React from "react";

const Contact = () => {
  return (
    <div className="contact-main">
      <div className="contact">
        <a
          href="http://github.com/marcsi19"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("./img/github.jpg")} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/mariannmateka/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("./img/linkedin.png")} alt="linkedin" />
        </a>
        {/* <a href="https://bit.ly/2ZsoiWH" target="blank"> */}
        <a
          href="https://drive.google.com/file/d/1Mkl047pbi5yfQsPOZ8INJADtFSch9wSs/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("./img/resume.png")} alt="resume" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
