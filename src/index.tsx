import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "./context/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById("root")
);
