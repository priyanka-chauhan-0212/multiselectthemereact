import "./styles.css";
import Card from "./Card";
import { useState, useContext } from "react";
import { ThemeContext } from "./Theme";

export default function App() {
  const themeContext = useContext(ThemeContext);
  const [th, setTh] = useState(themeContext);

  function changeTheme(theme) {
    setTh(theme);
  }
  return (
    <div className="App">
      {JSON.stringify(th)}
      <div
        className="btn-group p-5"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-danger m-2 bg-red"
          onClick={() => changeTheme("red")}
        >
          Red
        </button>
        <button
          type="button"
          className="btn btn-warning m-2 bg-yellow"
          onClick={() => changeTheme("yellow")}
        >
          Yellow
        </button>
        <button
          type="button"
          className="btn btn-success m-2 bg-green"
          onClick={() => changeTheme("green")}
        >
          Green
        </button>
        <button
          type="button"
          className="btn btn-primary m-2 bg-blue"
          onClick={() => changeTheme("blue")}
        >
          blue
        </button>
        <button
          type="button"
          className="btn btn-dark m-2 bg-dark"
          onClick={() => changeTheme("dark")}
        >
          Dark
        </button>
      </div>
      <Card />
    </div>
  );
}
