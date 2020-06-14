import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "pallet-wrap-css/css/pallet-0.3.0.css";
import { configureAnchors } from "react-scrollable-anchor";

configureAnchors({ offset: -60, scrollDuration: 0 });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
