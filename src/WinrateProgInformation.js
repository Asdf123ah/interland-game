import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./WinrateProgInformation.css";

function WinrateProgInformation() {
  const { userId } = useParams();
  const [winRate, setWinRate] = useState(0);

  useEffect(() => {
    const fetchWinRate = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/user/${userId}/winrate?category=Information Literacy Skill`
        );
        const fetchedWinRate = response.data.winRate;
        setWinRate(fetchedWinRate);
      } catch (error) {
        console.error("Error fetching win rate:", error);
      }
    };
    fetchWinRate();
  }, [userId]);

  return (
    <div>
      <div className="label1Information">WIN RATE</div>
      <div className="label2Information">
        {!isNaN(winRate)
          ? winRate % 1 === 0
            ? parseInt(winRate)
            : parseFloat(winRate)
                .toFixed(2)
                .replace(/\.?0*$/, "")
          : "N/A"}
        %
      </div>
      <div className="grayBox1StatInformation">
        <div className="whiteBox1StatInformation">
          <div
            className="blueBox1StatInformation"
            style={{
              "--background-size": winRate ? `${winRate}%` : "0%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default WinrateProgInformation;
