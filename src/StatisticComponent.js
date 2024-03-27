import React, { useState, useEffect } from "react";
import "./StatisticComponent.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import GraphStat from "./GraphStat";
import WinrateProgBasic from "./WinrateProgBasic";
import WinrateProgInternet from "./WinrateProgInternet";
import WinrateProgCommunication from "./WinrateProgCommunication";
import WinrateProgInformation from "./WinrateProgInformation";
import Badges from "./Badges";

function StatisticComponent() {
  const [activeTab, setActiveTab] = useState("basic");
  const navigate = useNavigate();
  const { userId } = useParams();
  const [userName, setUserName] = useState("");
  const [userStatusData, setUserStatusData] = useState(null);
  const [categoryAttempt1, setCategoryAttempt1] = useState(null);
  const [bestScore1, setBestScore1] = useState(null);
  const [bestTime1, setBestTime1] = useState(null);
  const [aveScore1, setAveScore1] = useState(null);
  const [aveTime1, setAveTime1] = useState(null);
  const [categoryAttempt2, setCategoryAttempt2] = useState(null);
  const [bestScore2, setBestScore2] = useState(null);
  const [bestTime2, setBestTime2] = useState(null);
  const [aveScore2, setAveScore2] = useState(null);
  const [aveTime2, setAveTime2] = useState(null);
  const [categoryAttempt3, setCategoryAttempt3] = useState(null);
  const [bestScore3, setBestScore3] = useState(null);
  const [bestTime3, setBestTime3] = useState(null);
  const [aveScore3, setAveScore3] = useState(null);
  const [aveTime3, setAveTime3] = useState(null);
  const [categoryAttempt4, setCategoryAttempt4] = useState(null);
  const [bestScore4, setBestScore4] = useState(null);
  const [bestTime4, setBestTime4] = useState(null);
  const [aveScore4, setAveScore4] = useState(null);
  const [aveTime4, setAveTime4] = useState(null);

  useEffect(() => {
    async function fetchUserStatusData() {
      try {
        await axios.post("http://localhost:4000/api/createUserStatus");

        const response = await axios.get(
          "http://localhost:4000/api/userStatus"
        );

        setUserStatusData(response.data);
      } catch (error) {
        console.error("Error fetching user status data:", error);
      }
    }

    fetchUserStatusData();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/user/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();
        setUserName(userData.name);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    const fetchCategoryAttempt = async () => {
      try {
        const response1 = await fetch(
          `http://localhost:4000/api/user/${userId}/categoryAttempt?category=Basic Computer and Mobile Skill`
        );
        const response2 = await fetch(
          `http://localhost:4000/api/user/${userId}/categoryAttempt?category=Internet Skill`
        );
        const response3 = await fetch(
          `http://localhost:4000/api/user/${userId}/categoryAttempt?category=Communication Skill`
        );
        const response4 = await fetch(
          `http://localhost:4000/api/user/${userId}/categoryAttempt?category=Information Literacy Skill`
        );
        if (!response1.ok || !response2.ok || !response3.ok || !response4.ok) {
          throw new Error("Failed to fetch categoryAttempt data");
        }
        const data1 = await response1.json();
        setCategoryAttempt1(data1.categoryAttempt);
        setBestScore1(data1.bestScore);
        setBestTime1(data1.bestTime);
        setAveScore1(data1.aveScore);
        setAveTime1(data1.aveTime);

        const data2 = await response2.json();
        setCategoryAttempt2(data2.categoryAttempt);
        setBestScore2(data2.bestScore);
        setBestTime2(data2.bestTime);
        setAveScore2(data2.aveScore);
        setAveTime2(data2.aveTime);

        const data3 = await response3.json();
        setCategoryAttempt3(data3.categoryAttempt);
        setBestScore3(data3.bestScore);
        setBestTime3(data3.bestTime);
        setAveScore3(data3.aveScore);
        setAveTime3(data3.aveTime);

        const data4 = await response4.json();
        setCategoryAttempt4(data4.categoryAttempt);
        setBestScore4(data4.bestScore);
        setBestTime4(data4.bestTime);
        setAveScore4(data4.aveScore);
        setAveTime4(data4.aveTime);
      } catch (error) {
        console.error("Error fetching categoryAttempt data:", error);
      }
    };
    fetchCategoryAttempt();
  }, [userId]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleBackButton = () => {
    navigate(`/category-selection/${userId}`);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "basic":
        return (
          <div>
            <WinrateProgBasic />
            <div className="grayBox2Stat">
              <label className="label3">GAMES PLAYED</label>
              <div className="blueBox2Stat">
                <div className="blueBoxStatText">{categoryAttempt1}</div>
              </div>
              <label className="label4">BEST SCORE</label>
              <div className="blueBox3Stat">
                <div className="blueBoxStatText">{bestScore1}</div>
              </div>
              <label className="label5">BEST TIME</label>
              <div className="blueBox4Stat">
                <div className="blueBoxStatText">{bestTime1}</div>
              </div>
              <label className="label6">AVERAGE SCORE</label>
              <div className="blueBox5Stat">
                <div className="blueBoxStatText">{aveScore1}</div>
              </div>
              <label className="label7">AVERAGE TIME</label>
              <div className="blueBox6Stat">
                <div className="blueBoxStatText">{aveTime1}</div>
              </div>
            </div>
            <div className="grayBox3Stat">
              <div className="graph-div">
                <GraphStat />
              </div>
              <label className="label8">OVERVIEW</label>
              <label className="label9">
                A = Basic Computer and Mobile
                Skill&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;C = Communication Skill
                <br />
              </label>
              <label className="label10">
                B = Internet
                Skill&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;D
                = Information Literacy Skill
                <br />
              </label>
              <div className="blueBox7Stat">
                <label className="label11">
                  The skill graph visualizes the strengths and weaknesses of the
                  user in digital literacy, with a larger area indicating a
                  broader skill set or higher proficiency.
                </label>
              </div>
            </div>
          </div>
        );
      case "internet":
        return (
          <div>
            <WinrateProgInternet />
            <div className="grayBox2Stat">
              <label className="label3">GAMES PLAYED</label>
              <div className="blueBox2Stat">
                <div className="blueBoxStatText">{categoryAttempt2}</div>
              </div>
              <label className="label4">BEST SCORE</label>
              <div className="blueBox3Stat">
                <div className="blueBoxStatText">{bestScore2}</div>
              </div>
              <label className="label5">BEST TIME</label>
              <div className="blueBox4Stat">
                <div className="blueBoxStatText">{bestTime2}</div>
              </div>
              <label className="label6">AVERAGE SCORE</label>
              <div className="blueBox5Stat">
                <div className="blueBoxStatText">{aveScore2}</div>
              </div>
              <label className="label7">AVERAGE TIME</label>
              <div className="blueBox6Stat">
                <div className="blueBoxStatText">{aveTime2}</div>
              </div>
            </div>
            <div className="grayBox3Stat">
              <div>
                <GraphStat />
              </div>
              <label className="label8">OVERVIEW</label>
              <label className="label9">
                A = Basic Computer and Mobile
                Skill&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;C = Communication Skill
                <br />
              </label>
              <label className="label10">
                B = Internet
                Skill&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;D
                = Information Literacy Skill
                <br />
              </label>
              <div className="blueBox7Stat">
                <label className="label11">
                  The skill graph visualizes the strengths and weaknesses of the
                  user in digital literacy, with a larger area indicating a
                  broader skill set or higher proficiency.
                </label>
              </div>
            </div>
          </div>
        );
      case "communication":
        return (
          <div>
            <WinrateProgCommunication />
            <div className="grayBox2Stat">
              <label className="label3">GAMES PLAYED</label>
              <div className="blueBox2Stat">
                <div className="blueBoxStatText">{categoryAttempt3}</div>
              </div>
              <label className="label4">BEST SCORE</label>
              <div className="blueBox3Stat">
                <div className="blueBoxStatText">{bestScore3}</div>
              </div>
              <label className="label5">BEST TIME</label>
              <div className="blueBox4Stat">
                <div className="blueBoxStatText">{bestTime3}</div>
              </div>
              <label className="label6">AVERAGE SCORE</label>
              <div className="blueBox5Stat">
                <div className="blueBoxStatText">{aveScore3}</div>
              </div>
              <label className="label7">AVERAGE TIME</label>
              <div className="blueBox6Stat">
                <div className="blueBoxStatText">{aveTime3}</div>
              </div>
            </div>
            <div className="grayBox3Stat">
              <div>
                <GraphStat />
              </div>
              <label className="label8">OVERVIEW</label>
              <label className="label9">
                A = Basic Computer and Mobile
                Skill&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;C = Communication Skill
                <br />
              </label>
              <label className="label10">
                B = Internet
                Skill&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;D
                = Information Literacy Skill
                <br />
              </label>
              <div className="blueBox7Stat">
                <label className="label11">
                  The skill graph visualizes the strengths and weaknesses of the
                  user in digital literacy, with a larger area indicating a
                  broader skill set or higher proficiency.
                </label>
              </div>
            </div>
          </div>
        );
      case "information":
        return (
          <div>
            <WinrateProgInformation />
            <div className="grayBox2Stat">
              <label className="label3">GAMES PLAYED</label>
              <div className="blueBox2Stat">
                <div className="blueBoxStatText">{categoryAttempt4}</div>
              </div>
              <label className="label4">BEST SCORE</label>
              <div className="blueBox3Stat">
                <div className="blueBoxStatText">{bestScore4}</div>
              </div>
              <label className="label5">BEST TIME</label>
              <div className="blueBox4Stat">
                <div className="blueBoxStatText">{bestTime4}</div>
              </div>
              <label className="label6">AVERAGE SCORE</label>
              <div className="blueBox5Stat">
                <div className="blueBoxStatText">{aveScore4}</div>
              </div>
              <label className="label7">AVERAGE TIME</label>
              <div className="blueBox6Stat">
                <div className="blueBoxStatText">{aveTime4}</div>
              </div>
            </div>
            <div className="grayBox3Stat">
              <div>
                <GraphStat />
              </div>
              <label className="label8">OVERVIEW</label>
              <label className="label9">
                A = Basic Computer and Mobile
                Skill&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;C = Communication Skill
                <br />
              </label>
              <label className="label10">
                B = Internet
                Skill&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;D
                = Information Literacy Skill
                <br />
              </label>
              <div className="blueBox7Stat">
                <label className="label11">
                  The skill graph visualizes the strengths and weaknesses of the
                  user in digital literacy, with a larger area indicating a
                  broader skill set or higher proficiency.
                </label>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="containerStat">
      <Badges />
      <div className="grayBoxStat">
        <button
          className="grayBoxStatbutton"
          onClick={handleBackButton}
        ></button>
        <p>{userName}'s Statistics</p>
      </div>
      <div className="whiteBoxStat">
        <div className="blueBoxStat">
          <div className="blueBoxStatdiv">
            <p
              className={activeTab === "basic" ? "active" : ""}
              onClick={() => handleTabClick("basic")}
            >
              Basic Computer and Mobile Skill
            </p>
            <p
              className={activeTab === "internet" ? "active" : ""}
              onClick={() => handleTabClick("internet")}
            >
              Internet Skill
            </p>
            <p
              className={activeTab === "communication" ? "active" : ""}
              onClick={() => handleTabClick("communication")}
            >
              Communication Skill
            </p>
            <p
              className={activeTab === "information" ? "active" : ""}
              onClick={() => handleTabClick("information")}
            >
              Information Literacy Skill
            </p>
          </div>
        </div>
        {activeTab === "basic" && <span className="triangle1"></span>}
        {activeTab === "internet" && <span className="triangle2"></span>}
        {activeTab === "communication" && <span className="triangle3"></span>}
        {activeTab === "information" && <span className="triangle4"></span>}
        {renderTabContent()}
      </div>
    </div>
  );
}

export default StatisticComponent;
