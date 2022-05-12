import React, { useContext, useState } from "react";
import "./Card.css";
import { ThemeContext } from "./Theme";

export default function Home() {
  const themeContext = useContext(ThemeContext);
  const [th] = useState(themeContext);

  return (
    <div className="container">
      <div className="row"></div>
      <div className="row">
        <div className={`card text-center bg-${th}`}>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <button className={`btn btn-${th}`}>Go somewhere</button>
          </div>
        </div>
      </div>
    </div>
  );
}
