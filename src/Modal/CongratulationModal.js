import React from "react";
import "./CongratulationModal.css";

const CongratulationModal = ({ onClose }) => {
  return (
    <div className="modal-backgroundCongratulation">
      <div className="modal-contentCongratulation">
        <h2>Congratulations!</h2>
        <p>
          You've performed excellently in this category. Why not explore another one?
        </p>
        <button className="button-closeCongratulation" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CongratulationModal;
