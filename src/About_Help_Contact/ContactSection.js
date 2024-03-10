import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutHelpContactSection.css";
import sycuresLogo from "../Photos/gamePictureLogo.png";
import contactRobot from '../Photos/contactRobot.png';
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


function ContactSection() {
  const navigate = useNavigate();

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
          <div className="whiteBox1">
            <img className="contact-robot" src={contactRobot} alt="Contact Robot" />
          </div>
          <div className="blueBox">
            <h1 className="title">CONTACT</h1>
            <div className="contactInfo">
              <div className="contactRow">
                <FaEnvelope className="envelope"/>
                <p>sycures.gmail.com</p>
              </div>
              <div className="contactRow">
                <FaPhoneAlt className="phone"/>
                <p>09919693789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
