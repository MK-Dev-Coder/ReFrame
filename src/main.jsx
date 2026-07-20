import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";

/* The standalone single-file build (npm run build:standalone) is opened
   directly from disk, where BrowserRouter can't work — so it switches to
   hash-based URLs (#/about) instead. Hosted builds keep clean URLs. */
const useHashRouter =
  import.meta.env.VITE_STANDALONE || import.meta.env.VITE_GITHUB_PAGES;
const Router = useHashRouter ? HashRouter : BrowserRouter;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
