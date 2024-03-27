import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Badges.css";
import basicbadge from "./Photos/basicBadge.png";
import internetbadge from "./Photos/internetBadge.png";
import communicationbadge from "./Photos/communicationBadge.png";
import informationbadge from "./Photos/informationBadge.png";
import ConfettiEffect from "./Confetti.js";

function Badges() {
  const [userStatusData, setUserStatusData] = useState(null);
  const [showBadgePopup, setShowBadgePopup] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/user-status/${userId}`)
      .then((response) => setUserStatusData(response.data))
      .catch((error) => console.error("Error fetching user status:", error));
  }, [userId]);

  const handleBadgeClick = (badge) => {
    setSelectedBadge(badge);
    setShowBadgePopup(true);
  };

  const handleHideBadgePopup = () => {
    setShowBadgePopup(false);
  };

  if (
    !userStatusData ||
    !userStatusData.categories ||
    Object.keys(userStatusData.categories).length === 0
  ) {
    return null;
  }

  return (
    <div>
      {showBadgePopup && <ConfettiEffect numberOfPieces={500} />}
      {showBadgePopup && (
        <div className="popup-statistic">
          <div className="box-statistic1">
            <div className="box-statistic1-label">
              <p>{selectedBadge.title}</p>
              <img src={selectedBadge.image} alt={selectedBadge.alt} />
            </div>
          </div>
          <div className="box-statistic2">
            <div>Congratulations!</div>
            <p>
              You earned a badge by mastering the foundation of{" "}
              {selectedBadge.title.toUpperCase()}! You may now proceed to user
              statistics to view your progress and badges. Collect all badges to
              improve your digital literacy proficiency and enjoy the process.
            </p>
          </div>
          <button
            className="okay-button-statistic"
            onClick={handleHideBadgePopup}
          >
            Okay
          </button>
        </div>
      )}
      <div className="abc-badge">
        {userStatusData.categories.map(
          (category, index) =>
            !category.isWheelSpinning && (
              <button
                key={index}
                className={
                  category.categoryName === "Basic Computer and Mobile Skill"
                    ? "basic-badge"
                    : category.categoryName === "Internet Skill"
                    ? "internet-badge"
                    : category.categoryName === "Communication Skill"
                    ? "communication-badge"
                    : category.categoryName === "Information Literacy Skill"
                    ? "information-badge"
                    : ""
                }
                onClick={() =>
                  handleBadgeClick({
                    title: category.categoryName,
                    image: getCategoryImage(category.categoryName),
                    alt: `${category.categoryName} Badge`,
                  })
                }
              ></button>
            )
        )}
      </div>
    </div>
  );
}

function getCategoryImage(categoryName) {
  switch (categoryName) {
    case "Basic Computer and Mobile Skill":
      return basicbadge;
    case "Internet Skill":
      return internetbadge;
    case "Communication Skill":
      return communicationbadge;
    case "Information Literacy Skill":
      return informationbadge;
    default:
      return null;
  }
}

export default Badges;
