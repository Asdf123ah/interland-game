import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './GraphStat.css';
import axios from 'axios';

function GraphStat() {
    const { userId } = useParams();

  // State variables for the coordinates of points
  const [pointACy, setPointACy] = useState(50);
  const [pointBCx, setPointBCx] = useState(50);
  const [pointCCy, setPointCCy] = useState(50);
  const [pointDCx, setPointDCx] = useState(50);

useEffect(() => {
    const fetchWinRates = async () => {
      try {
        // Pass the category as a query parameter
        const basicComputerMobileSkillResponse = await axios.get(`http://localhost:4000/api/user/${userId}/winrate?category=Basic Computer and Mobile Skill`);

        // Extract win rate from the response
        const winRateBasic = parseFloat(basicComputerMobileSkillResponse.data.winRate);

        // Map the win rate value to the range 0% to 100%
        const mappedWinRateBasic = (winRateBasic - 0) * (100 - 0) / (100 - 0) + 0;
        // Map the win rate to the range from 50% to 0%
        const mappedPointACy = (mappedWinRateBasic - 0) * (0 - 50) / (100 - 0) + 50;

        // Set the state variables with the mapped win rate
        setPointACy(mappedPointACy);

      } catch (error) {
        console.error('Error fetching win rates:', error);
      }
    };

    fetchWinRates();
}, [userId]);

useEffect(() => {
    const fetchWinRates = async () => {
      try {
        // Pass the category as a query parameter
        const internetSkillResponse = await axios.get(`http://localhost:4000/api/user/${userId}/winrate?category=Internet Skill`);

        // Extract win rate from the response
        const winRateInternet = parseFloat(internetSkillResponse.data.winRate);

        // Map the win rate value to the range 0% to 100%
        const mappedWinRateInternet = (winRateInternet - 0) * (100 - 0) / (100 - 0) + 0;
        // Map the win rate to the range from 50% to 0%
        const mappedPointBCx = (mappedWinRateInternet - 0) * (100 - 50) / (100 - 0) + 50;

        // Set the state variables with the mapped win rate
        setPointBCx(mappedPointBCx);

      } catch (error) {
        console.error('Error fetching win rates:', error);
      }
    };
    fetchWinRates();
}, [userId]); 

useEffect(() => {
    const fetchWinRates = async () => {
      try {
        // Pass the category as a query parameter
        const communicationSkillResponse = await axios.get(`http://localhost:4000/api/user/${userId}/winrate?category=Communication Skill`);

        // Extract win rate from the response
        const winRateCommunication = parseFloat(communicationSkillResponse.data.winRate);

        // Map the win rate value to the range 0% to 100%
        const mappedWinRateCommunication = (winRateCommunication - 0) * (100 - 0) / (100 - 0) + 0;
        // Map the win rate to the range from 50% to 0%
        const mappedPointCCy = (mappedWinRateCommunication - 0) * (100 - 50) / (100 - 0) + 50;

        // Set the state variables with the mapped win rate
        setPointCCy(mappedPointCCy);

      } catch (error) {
        console.error('Error fetching win rates:', error);
      }
    };
    fetchWinRates();
}, [userId]); 

useEffect(() => {
    const fetchWinRates = async () => {
      try {
        // Pass the category as a query parameter
        const informationLiteracySkillResponse = await axios.get(`http://localhost:4000/api/user/${userId}/winrate?category=Information Literacy Skill`);

        // Extract win rate from the response
        const winRateInformation = parseFloat(informationLiteracySkillResponse.data.winRate);

        // Map the win rate value to the range 0% to 100%
        const mappedWinRateInformation = (winRateInformation - 0) * (100 - 0) / (100 - 0) + 0;
        // Map the win rate to the range from 50% to 0%
        const mappedPointDCx = (mappedWinRateInformation - 0) * (0 - 50) / (100 - 0) + 50;

        // Set the state variables with the mapped win rate
        setPointDCx(mappedPointDCx);

      } catch (error) {
        console.error('Error fetching win rates:', error);
      }
    };
    fetchWinRates();
}, [userId]); 
  
  return (
    <div style={{position: "absolute", top: "45%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "auto",}}>
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "470px",
        height: "470px",
        borderRadius: "50%",
        backgroundColor: "#1f144b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
        overflow: "visible",
      }}
    >
      <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}>
        {/* Horizontal line */}
        <line x1="0" y1="50%" x2="100%" y2="50%" style={{ stroke: "#ffffff", strokeWidth: "1px" }}/>
        {/* vertical line */}
        <line x1="50%" y1="0" x2="50%" y2="100%" style={{ stroke: "#ffffff", strokeWidth: "1px" }}/>


        {/* Point A */}
        <circle className="dot" cx="50%" cy={`${pointACy}%`} r="3" fill="#ffffff" />
        {/* Point B */}
        <circle className="dot" cx={`${pointBCx}%`} cy="50%" r="3" fill="#ffffff" />
        {/* Point C */}
        <circle className="dot" cx="50%" cy={`${pointCCy}%`} r="3" fill="#ffffff" />
        {/* Point D */}
        <circle className="dot" cx={`${pointDCx}%`} cy="50%" r="3" fill="#ffffff" />

        {/* Point A to Point B */}
        <line className="line1" x1="50%" y1={`${pointACy}%`} x2={`${pointBCx}%`} y2="50%" style={{ stroke: "#00AEC6", strokeWidth: "4px" }} />
        {/* Point B to Point C */}
        <line className="line2" x1={`${pointBCx}%`} y1="50%" x2="50%" y2={`${pointCCy}%`} style={{ stroke: "#00AEC6", strokeWidth: "4px" }} />
        {/* Point C to Point D */}
        <line className="line3" x1="50%" y1={`${pointCCy}%`} x2={`${pointDCx}%`} y2="50%" style={{ stroke: "#00AEC6", strokeWidth: "4px" }} />
        {/* Point D to Point A */}
        <line className="line4" x1={`${pointDCx}%`} y1="50%" x2="50%" y2={`${pointACy}%`} style={{ stroke: "#00AEC6", strokeWidth: "4px" }} />


        <text x="-7%" y="51%" fill="#1F144B" dominantBaseline="middle" style={{ fontSize: "2rem", fontWeight: "bold", overflow: "visible" }}>
            D
        </text>
        <text x="102%" y="51%" fill="#1F144B" dominantBaseline="middle" style={{ fontSize: "2rem", fontWeight: "bold", overflow: "visible" }}>
            B
        </text>
        <text x="48%" y="-3%" fill="#1F144B" dominantBaseline="baseline" style={{ fontSize: "2rem", fontWeight: "bold", overflow: "visible" }}>
            A
        </text>
        <text x="48%" y="103%" fill="#1F144B" dominantBaseline="hanging" style={{ fontSize: "2rem", fontWeight: "bold", overflow: "visible" }}>
            C
        </text>

        <text x="50%" y="2%" fill="#FFFFFF" dominantBaseline="baseline" style={{ fontSize: ".7rem", fontWeight: "bold", overflow: "visible" }}>
            100%
        </text>
        <text x="50%" y="13%" fill="#FFFFFF" dominantBaseline="baseline" style={{ fontSize: ".7rem", fontWeight: "bold", overflow: "visible" }}>
            80%
        </text>
        <text x="50%" y="23%" fill="#FFFFFF" dominantBaseline="baseline" style={{ fontSize: ".7rem", fontWeight: "bold", overflow: "visible" }}>
            60%
        </text>
        <text x="50%" y="34%" fill="#FFFFFF" dominantBaseline="baseline" style={{ fontSize: ".7rem", fontWeight: "bold", overflow: "visible" }}>
            40%
        </text>
        <text x="50%" y="45%" fill="#FFFFFF" dominantBaseline="baseline" style={{ fontSize: ".7rem", fontWeight: "bold", overflow: "visible" }}>
            20%
        </text>
        <text x="50%" y="50%" fill="#FFFFFF" dominantBaseline="baseline" style={{ fontSize: ".7rem", fontWeight: "bold", overflow: "visible" }}>
            0%
        </text>
        <text x="50%" y="-98%" fill="white" dominantBaseline="middle" style={{ fontSize: ".7rem", fontWeight: "bold", overflow: "visible", transform: "rotate(90deg)"}}>
            100%
        </text>
        <text x="50%" y="-87%" fill="white" dominantBaseline="middle" style={{ fontSize: ".7rem", fontWeight: "bold", overflow: "visible", transform: "rotate(90deg)"}}>
            80%
        </text>
        <text x="50%" y="-77%" fill="white" dominantBaseline="middle" style={{ fontSize: ".7rem", fontWeight: "bold", overflow: "visible", transform: "rotate(90deg)"}}>
            60%
        </text>
        <text x="50%" y="-66%" fill="white" dominantBaseline="middle" style={{ fontSize: ".7rem", fontWeight: "bold", overflow: "visible", transform: "rotate(90deg)"}}>
            40%
        </text>
        <text x="50%" y="-55%" fill="white" dominantBaseline="middle" style={{ fontSize: ".7rem", fontWeight: "bold", overflow: "visible", transform: "rotate(90deg)"}}>
            20%
        </text>
      </svg>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "370px",
          height: "370px",
          border: "2px solid white",
          borderRadius: "50%",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
          overflow: "visible",
        }}
      >
        <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
        </svg>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "270px",
          height: "270px",
          border: "2px solid white",
          borderRadius: "50%",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
          overflow: "visible",
        }}
      >
        <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
        </svg>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "170px",
          height: "170px",
          border: "2px solid white",
          borderRadius: "50%",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
          overflow: "visible",
        }}
      >
        <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
        </svg>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70px",
          height: "70px",
          border: "2px solid white",
          borderRadius: "50%",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
          overflow: "visible",
        }}
      >
        <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
        </svg>
      </div>
    </div>
    </div>
  );
}

export default GraphStat;
