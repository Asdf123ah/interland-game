import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutHelpContactSection.css";
import sycuresLogo from "../Photos/gamePictureLogo.png";

function AboutSection() {
  const navigate = useNavigate();

  const aboutText = `
  Welcome to SyCures, where digital literacy meets gamification! Our platform is designed to make mastering digital literacy skills an engaging and enjoyable experience. We're here to help you navigate the digital world with confidence and skill. Our team has carefully crafted each lesson to cover essential digital literacy topics, including basic computer and mobile skills, internet skills, communication skills, and information literacy.
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
          <h1 className="title">ABOUT</h1>
          <p className="text">{aboutText}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
