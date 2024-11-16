import React from "react";
import watkinsImg from "../components/watkins.jpg";
import "../player.css";

function PlayerWatkins() {
  return (
    <div className="player-page">
      <div className="player-info">
        <img src={watkinsImg} alt="Ollie Watkins" className="saka-image" />
        <h1>Ollie Watkins</h1>
        <h2>Aston Villa</h2>
        <p>
          Watkins has been a crucial figure for Aston Villa, bringing pace, work
          rate, and a clinical touch in front of goal. His performances in the
          Premier League have made him one of the most sought-after strikers.
        </p>

        <h2>England</h2>
        <p>
          Watkins has earned a place in the England national team and has shown
          his ability on the international stage. His performances in the
          Premier League have helped him secure a spot in national team
          selections.
        </p>

        <h2>Individual Awards</h2>
        <ul>
          <li>Premier League Player of the Month in October 2021</li>
          <li>FIFA World Cup 2022 participant with England</li>
        </ul>

        <h2>Other Achievements</h2>
        <p>
          Ollie Watkins has been one of the top English strikers in recent
          years.
        </p>
      </div>
    </div>
  );
}

export default PlayerWatkins;
