import React from "react";
import brunoImg from "../components/bruno.jpg";
import "../player.css";

function PlayerBruno() {
  return (
    <div className="player-page">
      <div className="player-info">
        <img src={brunoImg} alt="Bruno Fernandes" className="saka-image" />
        <h1>Bruno Fernandes</h1>
        <h2>Manchester United</h2>
        <p>
          Bruno Fernandes has been a key player for Manchester United since his
          arrival in 2020, contributing with goals and assists. His leadership
          and vision make him one of the most influential midfielders in the
          Premier League.
        </p>

        <h2>Portugal</h2>
        <p>
          Fernandes is a regular for the Portuguese national team and has played
          in major tournaments such as the UEFA European Championship and the
          FIFA World Cup. His performances on the international stage have
          earned him recognition as one of the top midfielders in Europe.
        </p>

        <h2>Individual Awards</h2>
        <ul>
          <li>Premier League Player of the Month in February 2021</li>
          <li>PFA Team of the Year in 2020–21</li>
          <li>Manchester United Player of the Year 2020–21</li>
        </ul>

        <h2>Other Achievements</h2>
        <p>
          Bruno Fernandes has won several domestic cups with Manchester United.
        </p>
      </div>
    </div>
  );
}

export default PlayerBruno;
