import React from "react";
const PlayGame = () => {
  return (
    <div id="playGame">
      {/* Mascot */}
      <img src={require("../assets/Mascot.png")} />
      {/* Logo plus options */}
      <div>
        <img src={require("../assets/Logo.png")} />
        <div>
          <a href="#"><p>New Game</p></a>
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
