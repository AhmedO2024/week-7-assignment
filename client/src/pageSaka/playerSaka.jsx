import React from "react";
import sakaImg from "../components/saka.jpg";
import "../player.css";

function PlayerSaka() {
  return (
    <div className="player-page">
      <div className="player-info">
        <img src={sakaImg} alt="Saka" className="saka-image" />
        <h1>Saka</h1>
        <h2>Arsenal</h2>
        <p>
          Saka has won an FA Cup and two FA Community Shields with Arsenal. He
          was named Arsenal Player of the Season in 2020–21 and 2021–22,
          becoming the first player to win the award in consecutive years since
          Thierry Henry. He's also the second-youngest player to play 100
          Premier League games for Arsenal.
        </p>

        <h2>England</h2>
        <p>
          Saka has represented England at the UEFA European Championship, the
          2022 FIFA World Cup, and was named England Men's Player of the Year in
          2021–22 and 2022–23. He was the youngest player to ever play for
          England in a major final in 2021.
        </p>

        <h2>Individual Awards</h2>
        <ul>
          <li>Premier League Player of the Month in March 2023</li>
          <li>PFA Team of the Year in 2022–23</li>
          <li>PFA Young Player of the Year in 2022–23</li>
          <li>London Football Awards Men's Young Player of the Year in 2023</li>
        </ul>

        <h2>Other Achievements</h2>
        <p>Saka was part of the IFFHS Men's Youth (U20) World Team in 2021.</p>
      </div>
    </div>
  );
}

export default PlayerSaka;
