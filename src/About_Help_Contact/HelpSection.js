import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutHelpContactSection.css";
import sycuresLogo from "../Photos/gamePictureLogo.png";

function HelpSection() {
  const navigate = useNavigate();

  const helpText = `
  SyCures emphasizes the mastery of digital literacy skills, with basic computer and mobile skills, internet skills, communication skills, and information literacy skills serving as the foundation to deepen knowledge in digital literacy. The gamified mastering tool allows users to select skills from four categories to proceed in the game. Each game consists of 10 questions, and players need to achieve a win rate of 70% to earn a badge. Completing all badges signifies an improvement in digital literacy.
  `;

  return (
    <div className="containerAboutHelpContact">
      <img
        className="sycuresLogoGameAboutHelpContact"
        src={sycuresLogo}
        alt="Sycures Logo"
      />
      <button
        className="backButtonAboutHelpContact"
        onClick={() => navigate("/login-form")}
      />
      <div className="whiteBoxBG">
        <div className="whiteBox">
          <h1 className="title">HELP</h1>
          <p className="text">{helpText}</p>
        </div>
      </div>
    </div>
  );
}

export default HelpSection;
