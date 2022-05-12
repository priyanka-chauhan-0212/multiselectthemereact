import React from "react";

export const themeData = {
  theme1: "red",
  theme2: "yellow",
  theme3: "green",
  theme4: "blue",
  theme5: "dark"
};

export const ThemeContext = React.createContext(themeData.theme1);
