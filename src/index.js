import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";

// ==========================
// Components
// ==========================



function Game() {
  return (
    <article className="game container mt-5">
      <section className="row">
        <div className="col-sm-8 game-board">
          <Board />
        </div>
        <div className="col-sm-4 game-info">
          <p className="h2">{/* status */}</p>
          <ul className="nav nav-pills flex-column">{/* TODO */}</ul>
        </div>
      </section>
    </article>
  );
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
