import React from "react";
import { Route, Switch } from "react-router-dom";
import Intro from "./intro";
import Contact from "./contact";
import Projects from "./projects";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Intro} />
      </Switch>
    </div>
  );
};

export default Routes;
