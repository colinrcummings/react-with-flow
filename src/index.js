// @flow
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const root: ?Element = document.getElementById("root");

if (root != null) {
  ReactDOM.render(<App />, root);
}
