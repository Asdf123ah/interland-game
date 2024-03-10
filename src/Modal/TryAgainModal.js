import React from 'react';
import './TryAgainModal.css';

const TryAgainModal = ({ onRetry }) => {
  return (
    <div className="try-again-modal">
      <div className="try-again-modal-content">
        <h2>TRY AGAIN</h2>
        <div className="try-again-modal-buttons">
          <button onClick={onRetry}>Retry</button>
        </div>
      </div>
    </div>
  );
};

export default TryAgainModal;
