import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";

//Style
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Header />
    <App />
  </Router>
);
