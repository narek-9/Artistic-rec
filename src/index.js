import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "normalize.css/normalize.css";
import { ThemeContextProvider } from "./contexts/ThemeContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
