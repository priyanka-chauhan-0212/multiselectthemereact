import "./styles.css";
import Card from "./Card";
import { useState } from "react";

export default function App({ theme }) {
  const [th, setTh] = useState(theme);
  function changeTheme(theme) {
    setTh(theme);
  }
  return (
    <div className="App">
      <div
        class="btn-group p-5"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          class="btn btn-danger m-2"
          onClick={() => changeTheme("red")}
          className={`btn btn-${th}`}
        >
          Red
        </button>
        <button type="button" class="btn btn-warning m-2">
          Yellow
        </button>
        <button type="button" class="btn btn-success m-2">
          Green
        </button>
        <button type="button" class="btn btn-primary m-2">
          blue
        </button>
        <button type="button" class="btn btn-dark m-2">
          Dark
        </button>
      </div>
      <Card theme={th} />
    </div>
  );
}
