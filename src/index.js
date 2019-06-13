import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import history from "./history";
import App from "./App";
import { Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
