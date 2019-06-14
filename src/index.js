import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import createBrowserHistory from "./history";
import App from "./App";
import { HashRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <HashRouter history={createBrowserHistory}>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
