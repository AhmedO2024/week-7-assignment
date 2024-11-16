import React from "react";
import richarlisonImg from "../components/richarlison.jpg";
import "../player.css";

function PlayerRicharlison() {
  return (
    <div className="player-page">
      <div className="player-info">
        <img src={richarlisonImg} alt="Richarlison" className="saka-image" />
        <h1>Richarlison</h1>
        <h2>Tottenham Hotspur</h2>
        <p>
          Richarlison is known for his versatility in the attack and his
          powerful presence on the pitch. He has been a key player for both
          Tottenham and the Brazil national team.
        </p>

        <h2>Brazil</h2>
        <p>
          Richarlison has represented Brazil in major tournaments, including the
          Copa América and the FIFA World Cup. His pace and aggression make him
          a threat to defenders worldwide.
        </p>

        <h2>Individual Awards</h2>
        <ul>
          <li>Brazilian Player of the Year 2022</li>
          <li>Premier League Team of the Season Nominee 2023</li>
        </ul>

        <h2>Other Achievements</h2>
        <p>
          Richarlison was part of the Brazil squad that won the 2021 Copa
          América.
        </p>
      </div>
    </div>
  );
}

export default PlayerRicharlison;
