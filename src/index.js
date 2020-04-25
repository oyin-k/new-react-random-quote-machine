import React from "react";
import ReactDOM from "react-dom";

import QuoteBox from "./QuoteBox";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <QuoteBox />
  </React.StrictMode>,
  rootElement
);
