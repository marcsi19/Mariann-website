import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <div className="project_skills">
        <div className="skills">
          <h3>Skills</h3>
          <div className="skill_category">
            <div className="skill_label">Languages</div>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS / Sass</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="skill_category">
            <div className="skill_label">Frameworks</div>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Node</li>
              <li>Express</li>
            </ul>
          </div>

          <div className="skill_category">
            <div className="skill_label">Tools</div>
            <ul>
              <li>Git / Github</li>
              <li>Sequelize</li>
              <li>Webpack</li>
              <li>Mocha / Chai</li>
              <li>Enzyme</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
      <ul>
        <li className="project__elem1">
          <div className="project_container__elem__tag1">
            <a
              href="https://donutjar.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project_detail project_title"
            >
              <img
                className="project_container__img"
                src={require("./img/projects/Donutjar.png")}
                alt="DonutJar"
              />
            </a>
          </div>
          <div className="project_container__elem__tag2">
            <p>E-commerce website</p>
            <div className="project_details">
              <a
                href="https://donutjar.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project_detail project_title"
              >
                DonutJar
              </a>

              <a
                href="https://github.com/grace-shopper-gh1809/donutJar"
                target="_blank"
                rel="noopener noreferrer"
                className="project_detail"
              >
                <img
                  className="project_container__icon project_detail"
                  src={require("./img/github2.jpg")}
                  alt="github"
                />
              </a>
            </div>

            <div className="tech">
              <p>
                JavaScript | Node | Express | PostgreSQ | Sequelize | React |
                Redux | Oauth
              </p>
            </div>
          </div>
        </li>

        <li className="project__elem">
          <div className="project_container__elem__tag1">
            <a
              className="project_detail project_title"
              href="https://codescape.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project_container__img"
                src={require("./img/projects/Codescape.png")}
                alt="Codescape"
              />
            </a>
          </div>
          <div className="project_container__elem__tag2">
            <p>"Escape the room" style code war game</p>
            <div className="project_details">
              <a
                className="project_detail project_title"
                href="https://codescape.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodeScape
              </a>
              <a
                className="project_detail"
                href="https://github.com/EscapeTheRoom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project_container__icon project_detail"
                  src={require("./img/github2.jpg")}
                  alt="github"
                />
              </a>
            </div>
            <div className="tech">
              <p>
                JavaScript | Node | Express | PostgreSQ | Sequelize | React |
                Redux | Docker
              </p>
            </div>
          </div>
        </li>

        <li className="project__elem">
          <div className="project_container__elem__tag1">
            <a
              className="project_detail project_title"
              href="https://marcsi19.github.io/MealDelivery/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project_container__img"
                src={require("./img/projects/Omnifood.png")}
                alt="MealDelivery"
              />
            </a>
          </div>
          <div className="project_container__elem__tag2">
            <p>Template for CSS</p>
            <div className="project_details">
              <a
                className="project_detail project_title"
                href="https://marcsi19.github.io/MealDelivery/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MealDelivery
              </a>
              <a
                className="project_detail"
                href="https://github.com/marcsi19/MealDelivery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project_container__icon project_detail"
                  src={require("./img/github2.jpg")}
                  alt="github"
                />
              </a>
            </div>
            <div className="tech">
              <p>CSS | Jquery | HTML</p>
            </div>
          </div>
        </li>

        <li className="project__elem">
          <div className="project_container__elem__tag1">
            <a
              className="project_detail project_title"
              href="https://github.com/marcsi19/LoanCalcSwift"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project_container__img"
                src={require("./img/projects/Swift.png")}
                alt="LoanCalc"
              />
            </a>
          </div>
          <div className="project_container__elem__tag2">
            <p>Mortgage/Loan Calculator written in Swift. </p>
            <div className="project_details">
              <a
                className="project_detail project_title"
                href="https://github.com/marcsi19/LoanCalcSwift"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mortgage Calculator
              </a>
              <a
                className="project_detail"
                href="https://github.com/marcsi19/LoanCalcSwift"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project_container__icon project_detail"
                  src={require("./img/github2.jpg")}
                  alt="github"
                />
              </a>
            </div>
            <div className="tech">
              <p>Swift </p>
            </div>
          </div>
        </li>

        <li className="project__elem">
          <div className="project_container__elem__tag1">
            <a
              className="project_detail project_title"
              href="https://marcsi19.github.io/react-components-mar/#ProgressBar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project_container__img"
                src={require("./img/projects/React.png")}
                alt="React_Component"
              />
            </a>
          </div>
          <div className="project_container__elem__tag2">
            <p>UI library similar to Material UI.</p>
            <div className="project_details">
              <a
                className="project_detail project_title"
                href="https://marcsi19.github.io/react-components-mar/#ProgressBar"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Component Library
              </a>
              <a
                className="project_detail"
                href="https://github.com/marcsi19/react-components-mar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project_container__icon project_detail"
                  src={require("./img/github2.jpg")}
                  alt="github"
                />
              </a>
            </div>
            <div className="tech">
              <p>React | react-docgen</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
