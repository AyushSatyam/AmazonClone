import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginContextProvider from "./context/LoginContext";
ReactDOM.render(
  <React.Fragment>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </React.Fragment>,
  document.getElementById("root")
);
