import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { HashRouter as Router } from "react-router-dom";



// Styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-toastify/dist/ReactToastify.css";

// Create Root and Render App
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
  <App />
</Router>
  </React.StrictMode>
);
