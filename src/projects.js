import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
  return (
    <div className="project">
      <div className="carousel-container">
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          showIndicators={false}
        >
          <div className="donut">
            <p>
              <img
                src={require("./img/projects/Donutjar.png")}
                alt="DonutJar"
              />
              <a
                href="https://donutjar.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DonutJar
              </a>
              <br />
              {/* </p>
            <p> */}
              <a
                href="https://github.com/grace-shopper-gh1809/donutJar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
                {/* <img src={require("./img/github.jpg")} alt="github" /> */}
              </a>
            </p>
          </div>
          <div className="codescape">
            <img
              src={require("./img/projects/Codescape.png")}
              alt="Codescape"
            />
            <p>
              <a
                href="https://codescape.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodeScape -
              </a>
              <a
                href="https://github.com/EscapeTheRoom"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;Github
              </a>
            </p>
          </div>
          <div>
            <img
              src={require("./img/projects/Omnifood.png")}
              alt="MealDelivery"
            />
            <p>
              <a
                href="https://marcsi19.github.io/MealDelivery/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MealDelivery -
              </a>

              <a
                href="https://github.com/marcsi19/MealDelivery"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;Github
              </a>
            </p>
          </div>
          <div>
            <img src={require("./img/projects/Swift.png")} alt="LoanCalc" />

            <a
              href="https://github.com/marcsi19/LoanCalcSwift"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mortgage Calculator
            </a>
          </div>
          <div>
            <img src={require("./img/projects/React.png")} alt="MealDelivery" />
            <p>
              <a
                href="https://marcsi19.github.io/react-components-mar/#ProgressBar"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Component Library -
              </a>

              <a
                href="https://github.com/marcsi19/react-components-mar"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;Github
              </a>
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
