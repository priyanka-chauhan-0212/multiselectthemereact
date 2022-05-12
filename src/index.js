import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { themeData } from "./Theme";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const ThemeContext = React.createContext(themeData.theme1);

root.render(
  <StrictMode>
    <ThemeContext.Provider value={themeData.theme1}>
      <App theme={themeData.theme1} />
    </ThemeContext.Provider>
  </StrictMode>
);
