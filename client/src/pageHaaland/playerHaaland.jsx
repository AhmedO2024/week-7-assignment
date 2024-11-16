import React from "react";
import haalandImg from "../components/haaland.jpg";
import "../player.css";

function PlayerHaaland() {
  return (
    <div className="player-page">
      <div className="player-info">
        <img src={haalandImg} alt="Erling Haaland" className="saka-image" />
        <h1>Erling Haaland</h1>
        <h2>Manchester City</h2>
        <p>
          Haaland has been one of the most prolific goal-scorers in European
          football. Since joining Manchester City, he has broken numerous goal
          scoring records and helped his team win multiple titles.
        </p>

        <h2>Norway</h2>
        <p>
          Haaland is Norway's most promising football talent and has already
          proven his worth on the international stage. His performances in World
          Cup qualifying and European Championship fixtures have been
          impressive.
        </p>

        <h2>Individual Awards</h2>
        <ul>
          <li>Premier League Golden Boot Winner in 2022-2023</li>
          <li>FIFA World Player of the Year Nominee</li>
        </ul>

        <h2>Other Achievements</h2>
        <p>Erling Haaland has set new records for goals in a season.</p>
      </div>
    </div>
  );
}

export default PlayerHaaland;
