import React from "react";
import "./BackModal.css";

const BackModal = ({ onProceed, onClose }) => {
  return (
    <div className="back-modal">
      <div className="back-modal-content">
        <p>Are you sure you want to go back?</p>
        <div className="back-modal-button-container">
          <button onClick={onProceed}>Yes</button>
          <button onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
};

export default BackModal;
