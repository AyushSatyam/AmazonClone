import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginContextProvider from "./context/LoginContext";
import ProductTechnicalDetailsContextProvider from "./context/ProductContext";
import ProductAdditionalInformationContextProvider from "./context/ProductAdditionalInformationContext";
ReactDOM.render(
  <React.Fragment>
    <LoginContextProvider>
      <ProductTechnicalDetailsContextProvider>
        <ProductAdditionalInformationContextProvider>
          <App />
        </ProductAdditionalInformationContextProvider>
      </ProductTechnicalDetailsContextProvider>
    </LoginContextProvider>
  </React.Fragment>,
  document.getElementById("root")
);
