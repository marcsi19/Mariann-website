import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="navi">
    <nav className="main-nav">
      <Link to="/" className="navlink">
        Home
      </Link>
      <br />
      <Link to="/projects" className="navlink">
        Projects
      </Link>
      <br />
      <Link to="/contact" className="navlink">
        Contact
      </Link>
      <br />
    </nav>
  </div>
);

export default Navbar;
