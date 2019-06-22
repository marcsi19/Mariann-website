import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <div className="project__elem">
        <div className="project_container__elem__tag1">
          <img
            className="project_container__img"
            src={require("./img/projects/Donutjar.png")}
            alt="DonutJar"
          />
        </div>
        <div className="project_container__elem__tag2">
          <p>E-commerce website selling doughnuts.</p>
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
                src={require("./img/github.jpg")}
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="project__elem">
        <div className="project_container__elem__tag1">
          <img
            className="project_container__img"
            src={require("./img/projects/Codescape.png")}
            alt="Codescape"
          />
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
                src={require("./img/github.jpg")}
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="project__elem">
        <div className="project_container__elem__tag1">
          <img
            className="project_container__img"
            src={require("./img/projects/Omnifood.png")}
            alt="MealDelivery"
          />
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
                src={require("./img/github.jpg")}
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="project__elem">
        <div className="project_container__elem__tag1">
          <img
            className="project_container__img"
            src={require("./img/projects/Swift.png")}
            alt="LoanCalc"
          />
        </div>
        <div className="project_container__elem__tag2">
          <p>Mortgage/Loan Calculator written in Swift. </p>
          <p>
            Add the amount, terms in months and yearly interest rate so the
            calculator can calculate your monthly payment. It also displays how
            much is the principal and the interest part of the payment in each
            month along with remaining balance.
          </p>
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
                src={require("./img/github.jpg")}
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="project__elem">
        <div className="project_container__elem__tag1">
          <img
            className="project_container__img"
            src={require("./img/projects/React.png")}
            alt="React_Component"
          />
        </div>
        <div className="project_container__elem__tag2">
          <p>
            UI library similar to Material UI. Followed ATOMIC design, creating
            smaller atoms to create molecules to create components that are
            small and reusable. Automated documentation using react-docgen.
          </p>
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
                src={require("./img/github.jpg")}
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
