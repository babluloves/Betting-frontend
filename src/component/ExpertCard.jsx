// PredictionCard.jsx
import React from 'react';
import LockIcon from '../assets/lock-active.svg'; 
import '../scss/predictioncard.css';

const ExpertCard = ({ teamName, price, onPay }) => {
  return (
    <div className="prediction-card">
      <div className="card-content">
        <h2>{teamName}</h2>
        
        {/* Add other match details */}
      </div>

      <button className="pay-button" onClick={onPay}>
        Expert Team
      </button>
    </div>
  );
};

export default ExpertCard;
