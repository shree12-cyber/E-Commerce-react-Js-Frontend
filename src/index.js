import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
require ('dotenv').config();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
