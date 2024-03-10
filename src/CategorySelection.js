import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CategorySelection.css";
import { IoStatsChart } from "react-icons/io5";
import axios from "axios";
import CongratulationModal from "./Modal/CongratulationModal";
import BackModal from "./Modal/BackModal";
import sycuresLogo from './Photos/gamePictureLogo.png';

function CategorySelection() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showBackModal, setShowBackModal] = useState(false);

  const categories = [
    "Basic Computer and Mobile Skill",
    "Internet Skill",
    "Communication Skill",
    "Information Literacy Skill",
  ];

  const handleCategoryClick = async (category) => {
    try {
      await axios.post(
        `http://localhost:4000/api/user/updateCategories/${userId}`,
        {
          category: category,
        }
      );

      const categoryPath = category.toLowerCase().replace(/\s+/g, "-");

      navigate(`/${categoryPath}/${userId}`, {});
    } catch (error) {
      console.error("Error updating user categories:", error);
    }
  };

  const handleCloseCongratulations = () => {
    setShowCongratulations(false);
  };

  const handleBackButtonClick = () => {
    setShowBackModal(true);
  };

  const handleCloseBackModal = () => {
    setShowBackModal(false);
  };

  const handleProceedToLoginForm = () => {
    handleCloseBackModal();
    navigate("/login-form");
  };

  const handleStatsButtonClick = () => {
    navigate(`/statistic/${userId}`);
  };

  return (
    <div className="containerCategorySelection">
      <button
        className="backButtonCategorySelection"
        onClick={handleBackButtonClick}
      />
      <img className="sycuresLogoGameCategorySelection" src={sycuresLogo} alt="Sycures Logo" />
      <div className="boxCategorySelectionBG">
      <div className="boxCategorySelection">
        <div className="popupInstruction">
          <p>Please choose one digital skill to start the game.</p> 
        </div>
        <div className="buttons-container">
          <div className="rowCategorySelection">
            {categories.slice(0, 2).map((category) => (
              <button
                key={category}
                className="buttonCategorySelection"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="rowCategorySelection">
            {categories.slice(2, 4).map((category) => (
              <button
                key={category}
                className="buttonCategorySelection"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      </div>
      <button className="stats-button" onClick={handleStatsButtonClick}>
      <IoStatsChart style={{ color: '#84BCC8' }} />
      STATS
      </button>
      {showCongratulations && (<CongratulationModal onClose={handleCloseCongratulations} />)}
      {showBackModal && (<BackModal onProceed={handleProceedToLoginForm} onClose={handleCloseBackModal}/>)}
    </div>
  );
}

export default CategorySelection;
