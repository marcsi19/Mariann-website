import React from "react";

const Donut = () => {
  return (
    <div className="donuts">
      <div className="description">
        Implemented the stripe API for payment processing.
        <br />
        Developed an intuitive UI with React components, following ATOMIC
        design.
        <br />
        Performed complex SQL Queries with PostgreSQL to persist the database.
        <br />
        Developed Container components as the logic layer for the UI components.
        <br />
        Implemented various Validation Controls for form validation and
        implemented custom validation controls using Object Oriented JavaScript.
      </div>
      <div className="donutjar">
        <div className="donutjar__web">
          <a
            href="https://donutjar.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DonutJar
          </a>
        </div>
        <div className="donutjar__git">
          <a
            href="https://github.com/grace-shopper-gh1809/donutJar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("./img/github.jpg")} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donut;
