import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./components/login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import Listing from "./components/listing/listing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Listing />
  </React.StrictMode>
);

reportWebVitals();
