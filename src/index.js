import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { themeData, ThemeContext } from "./Theme";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeContext.Provider value={themeData.theme1}>
      <App />
    </ThemeContext.Provider>
  </StrictMode>
);
