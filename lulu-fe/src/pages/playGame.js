import React from "react";
import { Link } from "react-router-dom";
const PlayGame = () => {
  return (
    <div id="playGame">
      {/* Mascot */}
      <img src={require("../assets/Mascot.png")} />
      {/* Logo plus options */}
      <div>
        <img src={require("../assets/Logo.png")} />
        <div>
          <Link to="">New Game</Link>
          <a href="#"><p>Tutorial</p></a>
          <a href="#"><p>Tribe Reviews</p></a>
          <a href="#"><p>Leadership Board</p></a>
          <a href="#"><p>Quit</p></a>
        </div>
      </div>
      <a><img src={ require("../assets/twitter.png") } /></a>
    </div>
  );
};

export default PlayGame;
