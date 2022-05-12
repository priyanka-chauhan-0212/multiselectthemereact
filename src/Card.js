import React from "react";
import "./Card.css";

export default function Home() {
  return (
    <div class="container">
      <div class="row">
        <div
          class="btn-group p-5"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger">
            Red
          </button>
          <button type="button" class="btn btn-warning">
            Yellow
          </button>
          <button type="button" class="btn btn-success">
            Green
          </button>
          <button type="button" class="btn btn-primary">
            blue
          </button>
          <button type="button" class="btn btn-dark">
            Dark
          </button>
        </div>
      </div>
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
