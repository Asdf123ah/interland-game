import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./WinrateProgInternet.css";

function WinrateProgBasic() {
  const { userId } = useParams();
  const [winRate, setWinRate] = useState(0);

  useEffect(() => {
    const fetchWinRate = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/user/${userId}/winrate?category=Internet Skill`
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
      <div className="label1Internet">WIN RATE</div>
      <div className="label2Internet">
        {!isNaN(winRate)
          ? winRate % 1 === 0
            ? parseInt(winRate)
            : parseFloat(winRate)
                .toFixed(2)
                .replace(/\.?0*$/, "")
          : "N/A"}
        %
      </div>
      <div className="grayBox1StatInternet">
        <div className="whiteBox1StatInternet">
          <div
            className="blueBox1StatInternet"
            style={{
              "--background-size": winRate ? `${winRate}%` : "0%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default WinrateProgBasic;
