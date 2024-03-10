import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./AllCategoriesCompletedModal.css";

const AllCategoriesCompletedModal = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const onClose = () => {
    navigate(`/`); // Use navigate to redirect to "/"
  };

  return (
    <div className="modal-backgroundAll">
      <div className="modal-contentAll">
        <h3>Congratulations!</h3>
        <p>Congratulations! You have successfully completed all categories.</p>
        <button className="button-closeAll" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AllCategoriesCompletedModal;

