import React from "react";
import './Welcome.css'

function Welcome() {
  return (
    <div className="welcome--container">
      <main id="welcome--title">Quizzical</main>
      <button id="welcome--startButton">Start quiz</button>
    </div>
  );
}

export default Welcome;