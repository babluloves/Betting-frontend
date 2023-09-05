// PredictionCard.jsx
import React from 'react';
import LockIcon from '../assets/lock-active.svg'; 
import '../scss/predictioncard.css';

const PredictionCard = ({ matchDetails, onPay }) => {
  return (
    <div className="prediction-card">
      <div className="card-content">
        <h2>{matchDetails.title}</h2>
        <p>Date: {matchDetails.date}</p>
        {/* Add other match details */}
      </div>
      <div className="card-lock">
        <img src={LockIcon} alt="Lock" />
      </div>
      <button className="pay-button" onClick={onPay}>
        Pay to Access Prediction
      </button>
    </div>
  );
};

export default PredictionCard;
