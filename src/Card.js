import React, { useState } from "react";
import "./Card.css";

export default function Home(theme) {
  const [th, setTh] = useState(theme);

  return (
    <div class="container">
      <div class="row"></div>
      <div class="row">
        <div class="card text-center bg-red bg-yellow">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btnsample ">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
