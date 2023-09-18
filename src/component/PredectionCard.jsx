// PredictionCard.jsx
import React from 'react';
import LockIcon from '../assets/lock-active.svg'; 
import '../scss/predictioncard.css';

const PredictionCard = ({ teamName, price, onPay }) => {
  return (
    <div className="prediction-card">
      <div className="card-content">
        <h2>{teamName}</h2>
        <p>Price: ${price}</p>
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
